'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courses from '@/data/music_courses.json'


function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">

      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All courses {courses.courses.length}</h1>
      <div className="flex flex-wrap justify-center">
        {courses.courses.map((course) => (
            <>
            <CardContainer className="inter-var m-4">
                <CardBody>
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {course.title}
                    </CardItem>
                    <CardItem
                    as ="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {course.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={course.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl froup-hover/card:shadow-xl"
                            alt={course.title}
                            />

                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                        translateZ={20}
                        as = "button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try Now →

                        </CardItem>
                        <CardItem 
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:test-black text-black text-xs font-bold">
                            Sign up
                        </CardItem>

                    </div>
                </CardBody>
            </CardContainer>
            </>
        ))}
      </div>
    </div>
  )
}

export default page
