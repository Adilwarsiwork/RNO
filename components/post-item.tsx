import Link from 'next/link';
import Image from 'next/image';
import PostDate from '@/components/post-date';
import PostTags from './post-tags';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
export default function PostItem({ ...props }) {
	return (
		<article className="flex flex-col h-full" data-aos="fade-up">
			<header>
				{props.image && (
					<ModalVideo
						thumb={VideoThumb}
						thumbWidth={1024}
						thumbHeight={576}
						thumbAlt="Modal video thumbnail"
						video="/videos/video.mp4"
						videoWidth={1920}
						videoHeight={1080}
					/>
				)}
				{props.tags && (
					<div className="mb-3 mt-3">
						<PostTags tags={props.tags} />
					</div>
				)}
				<h3 className="h4 mb-2">
					<Link
						href={`/blog/${props.slug}`}
						className="hover:text-gray-100 transition duration-150 ease-in-out"
					>
						{props.title}
					</Link>
				</h3>
				<span className="text-gray-500 mb-3">
					<PostDate dateString={props.publishedAt} />
				</span>
			</header>
			<p className="text-lg text-gray-400 grow mt-3">{props.summary}</p>
			<footer className="w-full">
				<a className="btn text-white bg-black hover:bg-red-800 w-full mt-2" href="#0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 mr-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
						/>
					</svg>
					DOWNLOAD NEWS
				</a>
			</footer>
		</article>
	);
}
