import {formatDate} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {Button} from '@/components/ui/button'
import {Startup, Author} from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author};

export const StartupCard = ({startup}: {startup: StartupTypeCard}) => {
    const { _createdAt, views, author, title, category, _id, image, description, _type } = startup;
    const date = formatDate(_createdAt);
    console.log(date, "date")
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className={"startup_card_date"}>{date}</p>
                <div className="flex gap-1.5">
                    {/*<EyeIcon className="size-6 text-primary"/>*/}
                    <span className="text-16-medium"> {views}</span>
                </div>
            </div>
            <div>
                <p> {title} </p>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/users/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1"> {author?.name}</p>
                    </Link>
                    <Link href={`startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1"> </h3>
                    </Link>
                </div>
                <Link href={`/users/${author?._id}`} >
                    <Image src={image} alt="startup image" width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/startup/${_id}`} >
                <p className="startup-card_desc">
                    {description}
                </p>
                <img src={image} alt="startup image" className="startup-card_img" />
            </Link>
            <div className="flex-between gap-3 mt-3">
                <Link href={`/?query=/${category?.toLowerCase()}`}>
                    <p className="text-16-medium">{category} </p>
                </Link>
                <Button className="startup-card_btn asChild">
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    );
};
