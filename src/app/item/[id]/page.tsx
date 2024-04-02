"use client";
import React, { useEffect, useState } from "react";
import ImageCarousel from "../../../components/imageCarousel";
import ItemDetail from "@/components/ItemDetail";
import CommentComp from "../../../components/comment-comp-single-view";

import { Edit2 } from "../../../components/Button-Graphics";
import { PlusCircle } from "../../../components/Button-Graphics";
import { ArrowLeftCircle } from "../../../components/Button-Graphics";

//how do we import our get and post handlers
//and allow the image carousel image data to be pulled from the schem
//(potentially using image api routes)

import CuteDog1 from "../../../../public/images/cute_dog1.jpg";
import CuteDog2 from "../../../../public/images/cute_dog2.jpg";
import CuteDog3 from "../../../../public/images/cute_dog3.jpg";
import CuteDog4 from "../../../../public/images/cute_dog4.jpg";
import CuteDog5 from "../../../../public/images/cute_dog5.jpg";
import IllegalCat from "../../../../public/images/IllegalCat.jpeg";

import { SelectComment } from "@/db/schema";
import { SelectItem } from "@/db/schema";

const imageList = [
    CuteDog1,
    CuteDog2,
    CuteDog3,
    CuteDog4,
    CuteDog5,
    IllegalCat,
];

export default function Page({ params }: { params: { id: string } }) {
    const [description, setDescription] = useState<SelectItem | null>(null);
    const [comment, setComment] = useState<SelectComment | null>(null);

    const getItemDetails = () => {
        setDescription({
            id: 112,
            name: "Item Name",
            desc: "He was aware there were numerous wonders of this world including the unexplained creations of humankind that showed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids. There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn't make any sense and he wondered how he was ever going to be able to explain it.",
            tags: ["hi", "hey"],
            imageUrl: null,
            status: "",
        });

        setComment({
            id: 1,
            userId: 123,
            timestamp: "2023-11-18 at 10:00:00",
            message: "This is a test comment",
            itemId: 456,
        });
    };

    useEffect(() => {
        getItemDetails();
    }, []);

    return (
        <main className="bg-white">
            <div className="p-8 w-full h-full flex flex-col lg:flex-row justify-center items-center">
                <ImageCarousel imageList={imageList} />
                <div className="py-10 lg:px-10 bg-white lg:w-[50%] space-y-5">
                    <div className="flex flex-row justify-between">
                        <button className="text-black flex shrink-0">
                            <ArrowLeftCircle />
                            <div className="pl-2">Back to inventory list</div>
                        </button>
                        <button className="text-orange-400 flex border-orange-400 border-2 p-2 rounded-lg">
                            <Edit2 />
                            <div className="pl-1">Edit</div>
                        </button>
                    </div>
                    {description && (
                        <ItemDetail
                            name={description.name}
                            tags={description.tags}
                            description={description.desc}
                            status={description.status}
                        ></ItemDetail>
                    )}
                </div>
            </div>
            <div className="flex p-8 justify-left space-x-4">
                <CommentComp itemId={456} />
            </div>
        </main>
    );
}
