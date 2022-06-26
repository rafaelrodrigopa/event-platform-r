import { useEffect, useState } from 'react';
import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';

import { useGetLessonBySlugQuery } from '../graphql/generated';

import { Footer } from './Footer';

interface VideoProps {
    lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
    const [showVideo, setShowVideo] = useState(!!lessonSlug);

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: lessonSlug
        }
    });

    useEffect(() => {
        setShowVideo(false);
        setTimeout(() => setShowVideo(true), 100);
    }, [lessonSlug])

    if (!data || !data.lesson) {
        return (
            <div className="flex flex-1 items-center justify-center">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    {
                        showVideo && (
                            <Player>
                                <Youtube videoId={data.lesson.videoId} />
                                <DefaultUi />
                            </Player>
                        )
                    }
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
                    <div className="flex-1">
                        <h1 className="md:text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="text-xs md:text-lg text-gray-200 mt-4 md:leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-4 md:mt-6">
                            <img className="h-16 w-16 rounded-lg md:rounded-full border-2 border-blue-500"
                                src={data.lesson.teacher.avatarURL}
                                alt={data.lesson.teacher.name} />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-sm md:text-2xl block">
                                    {data.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-200 text-[10px] md:text-sm block">
                                    {data.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="flex md:flex-col flex-row gap-4">
                        <a href="#" className="p-2 md:p-4 text-[10px] md:text-sm flex-1 bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo className="text-lg md:text-2xl" />
                            Comunidade do Discord
                        </a>
                        <a href="#" className="p-2 md:p-4 text-[10px] md:text-sm flex-1 border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning className="text-lg md:text-2xl" />
                            Acesse o Desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-10 md:mt-20 grid md:grid-cols-2">
                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="p-2 md:p-6 bg-green-700 h-full flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-2 md:py-6 flex flex-1 flex-col leading-relaxed">
                            <strong className="md:text-2xl">
                                Material complementar
                            </strong>
                            <p className="text-[10px] md:text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="p-2 md:p-6 h-full flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="p-2 md:p-6 bg-green-700 h-full flex items-center">
                            <ImageSquare size={40} />
                        </div>
                        <div className="py-2 md:py-6 flex flex-1 flex-col leading-relaxed">
                            <strong className="md:text-2xl">
                                Wallpapers
                            </strong>
                            <p className="text-[10px] md:text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="p-2 md:p-6 h-full flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}