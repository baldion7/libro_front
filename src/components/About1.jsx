import { CarouselPost } from './CarouselPost.jsx'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'
export const About1 = ({rute,actividades}) => {
	const { id } = useParams();
	const { title, text, imagen, slider, youtube } = actividades[id];
	return (
		<>
			<section className="bg-white dark:bg-gray-800" >
				<div className="flex max-w-screen-xl px-4 py-8 mx-auto  justify-center items-centers">
					<div className="mr-auto w-full flex items-center flex-col ">
						<h1 className="p-10 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
							{title}
						</h1>
						<p className=" pr-14 pl-14 mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">
							{text}
						</p>
					</div>
				</div>
				<div className=" lg:col-span-5 lg:flex">
					<CarouselPost rute={rute} imageens={imagen} slider={slider}/>
				</div>

			<div className={'pt-2'}>
			{youtube && <div className="w-full px-4 pb-4 flex justify-center items-center "> <YouTube videoId={youtube} className="flex justify-center items-center w-full rounded" /> </div>}
		</div>
			</section>

			{/*<section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] p-1 overflow-hidden bg-white">
				<div className="container">
					<div className={ imagen ? 'flex flex-wrap items-start -mx-4 justify-between': 'flex flex-wrap items-start -mx-4 justify-center'}>
						{imagen && <div className="w-full px-4 lg:w-6/12 flex i">
							<div className="grid items-center -mx-3 sm:-mx-4 grid-flow-row-dense grid-cols-2 ">
								{imagen && <div className="w-full px-3 sm:px-4">
									<div className="py-3 sm:py-4">
										<img
											src={imagen && imagen[0].img}
											alt=""
											className="w-full rounded-2xl"
										/>
									</div>
									<div className="py-3 sm:py-4">
										<img
											src={ imagen && imagen[1].img}
											alt=""
											className="w-full rounded-2xl"
										/>
									</div>
								</div>
								}
								<div className="w-full px-3 sm:px-4 gr">
									<div className="relative z-10 my-4">
										<img
											src={imagen && imagen[2].img}
											alt=""
											className="w-full rounded-2xl"
										/>
										<span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
												width={134}
												height={106}
												viewBox="0 0 134 106"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
                        <circle
													cx="1.66667"
													cy={104}
													r="1.66667"
													transform="rotate(-90 1.66667 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy={104}
													r="1.66667"
													transform="rotate(-90 16.3333 104)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy={104}
													r="1.66667"
													transform="rotate(-90 31 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy={104}
													r="1.66667"
													transform="rotate(-90 45.6667 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3334"
													cy={104}
													r="1.66667"
													transform="rotate(-90 60.3334 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy={104}
													r="1.66667"
													transform="rotate(-90 88.6667 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy={104}
													r="1.66667"
													transform="rotate(-90 117.667 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy={104}
													r="1.66667"
													transform="rotate(-90 74.6667 104)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy={104}
													r="1.66667"
													transform="rotate(-90 103 104)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy={104}
													r="1.66667"
													transform="rotate(-90 132 104)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="89.3333"
													r="1.66667"
													transform="rotate(-90 1.66667 89.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="89.3333"
													r="1.66667"
													transform="rotate(-90 16.3333 89.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="89.3333"
													r="1.66667"
													transform="rotate(-90 31 89.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="89.3333"
													r="1.66667"
													transform="rotate(-90 45.6667 89.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="89.3338"
													r="1.66667"
													transform="rotate(-90 60.3333 89.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="89.3338"
													r="1.66667"
													transform="rotate(-90 88.6667 89.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="89.3338"
													r="1.66667"
													transform="rotate(-90 117.667 89.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="89.3338"
													r="1.66667"
													transform="rotate(-90 74.6667 89.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="89.3338"
													r="1.66667"
													transform="rotate(-90 103 89.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="89.3338"
													r="1.66667"
													transform="rotate(-90 132 89.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="74.6673"
													r="1.66667"
													transform="rotate(-90 1.66667 74.6673)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="31.0003"
													r="1.66667"
													transform="rotate(-90 1.66667 31.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 16.3333 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="31.0003"
													r="1.66667"
													transform="rotate(-90 16.3333 31.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 31 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="31.0003"
													r="1.66667"
													transform="rotate(-90 31 31.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 45.6667 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="31.0003"
													r="1.66667"
													transform="rotate(-90 45.6667 31.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 60.3333 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="30.9998"
													r="1.66667"
													transform="rotate(-90 60.3333 30.9998)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 88.6667 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="30.9998"
													r="1.66667"
													transform="rotate(-90 88.6667 30.9998)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 117.667 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="30.9998"
													r="1.66667"
													transform="rotate(-90 117.667 30.9998)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 74.6667 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="30.9998"
													r="1.66667"
													transform="rotate(-90 74.6667 30.9998)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 103 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="30.9998"
													r="1.66667"
													transform="rotate(-90 103 30.9998)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="74.6668"
													r="1.66667"
													transform="rotate(-90 132 74.6668)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="30.9998"
													r="1.66667"
													transform="rotate(-90 132 30.9998)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 1.66667 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 1.66667 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 16.3333 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 16.3333 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 31 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 31 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 45.6667 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 45.6667 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 60.3333 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 60.3333 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 88.6667 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 88.6667 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 117.667 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 117.667 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 74.6667 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 74.6667 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 103 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 103 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="60.0003"
													r="1.66667"
													transform="rotate(-90 132 60.0003)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="16.3333"
													r="1.66667"
													transform="rotate(-90 132 16.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="45.3333"
													r="1.66667"
													transform="rotate(-90 1.66667 45.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="1.66667"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 1.66667 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="45.3333"
													r="1.66667"
													transform="rotate(-90 16.3333 45.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="16.3333"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 16.3333 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="45.3333"
													r="1.66667"
													transform="rotate(-90 31 45.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx={31}
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 31 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="45.3333"
													r="1.66667"
													transform="rotate(-90 45.6667 45.3333)"
													fill="#3056D3"
												/>
                        <circle
													cx="45.6667"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 45.6667 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="45.3338"
													r="1.66667"
													transform="rotate(-90 60.3333 45.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="60.3333"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 60.3333 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="45.3338"
													r="1.66667"
													transform="rotate(-90 88.6667 45.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="88.6667"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 88.6667 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="45.3338"
													r="1.66667"
													transform="rotate(-90 117.667 45.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="117.667"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 117.667 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="45.3338"
													r="1.66667"
													transform="rotate(-90 74.6667 45.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx="74.6667"
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 74.6667 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="45.3338"
													r="1.66667"
													transform="rotate(-90 103 45.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx={103}
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 103 1.66683)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="45.3338"
													r="1.66667"
													transform="rotate(-90 132 45.3338)"
													fill="#3056D3"
												/>
                        <circle
													cx={132}
													cy="1.66683"
													r="1.66667"
													transform="rotate(-90 132 1.66683)"
													fill="#3056D3"
												/>
                      </svg>
                    </span>
									</div>
										{ slider && <div className='pt-5 pb-9'>
											<CarouselPost img={slider}/>
										</div>}
								</div>
									{videos && <div className="w-full px-4 pb-4 flex justify-center items-center flex-col col-span-2">
										{videos.map(({video})=>(
											<video key = {video} src={video} controls={true} className="flex justify-center items-center w-full rounded pt-3" >
										</video>
									))}
									</div>}
							</div>
						</div>
						}
						<div className="w-full px-4 lg:w-1/2 xl:w-5/12  ">
							<div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">

                </span>
								<h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
									{title}
								</h2>
								<p className="mb-8 text-base text-body-color" dangerouslySetInnerHTML={{ __html: parrafos }}>

								</p>
							</div>
						</div>
							{youtubeId && <div className="w-full px-4 pb-4 flex justify-center items-center "> <YouTube videoId={youtube} className="flex justify-center items-center w-full rounded" /> </div>}
					</div>
				</div>
			</section>*/}
		</>
	);
};

