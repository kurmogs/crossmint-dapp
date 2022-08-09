import React, { useEffect, useState, useRef } from "react";
import swal  from 'sweetalert';

function App() {
  const comingSoon = () => {
	swal("CoolBeez NFT coming soon", "", "info");
  }

  return (
    <div>
		<nav className="navbar container-fluid wow fadeInDown">
			<div className="float-right navbar_right">
				<button className="connect-button btn ml-2 d-inline-block no-display"><i className="fa-solid fa-network-wired"></i> CONNECT</button>
			</div>
		</nav>

		<section className="hero-section wow zoomIn">
			<img className="width-100 website-hero-back" src="./assets/images/new_banner.png"/>
			<img className="width-100 mobile-hero-back" src="./assets/images/new_banner_mobile.png"/>
		</section>
		
		<div className="main-container">
			<section className="about-section">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<span className="section_title line-height-15">WELCOME TO THE COOLBEEZ</span>
				</div>
				<div className="text-center pt-30 px-5 line-height-15 font_general wow fadeInUp">
					Coolbeez is a unique Ethereum based NFT collection featuring 6000 NFTs generated from hand drawn characters and 165 traits and is the first in a series of community collections from  <a href="https://www.mymetafoundation.org/" target="_blank">My Meta Foundation.</a> <br/>
					The CoolBeez vision is to create games within the metaverse which will be accessible for free to all holders of our NFTs. 
					{/* Coolbeez is a unique Ethereum based NFT collection featuring 6000 NFTs generated from hand drawn characters 
					and 165 traits and is the first in a series of community collections from <a href="https://www.mymetafoundation.org/" target="_blank">My Meta Foundation</a> . */}
				</div>
				{/* <div className="row mx-0 px-0 pt-30">
					<div className="col-md-6 mt-md-0 px-5 mr-0">
						<div className="font_general line-height-15 mb-5 wow fadeInLeft">
							•	Holders of a CoolBeez NFT are automatically granted membership and all the benefits of the largest land-NFT owning community in the metaverse with a portfolio that spans all metaverse platforms and grows with every release of a My Meta Foundation NFT collection. 
						</div>
						<div className="font_general line-height-15 mb-5 wow fadeInLeft">
							•	The first NFT that comes with 100% Land-NFT property ownership in 3 of the most popular metaverse platforms.
						</div>
					</div>
					<div className="col-md-6 px-5">
						<div className="font_general line-height-15 mb-5 wow fadeInRight">
							•	Land-NFTs and revenues generated from the properties are held in Community Development Fund wallet for the development and growth of the property portfolio and the distribution of passive income to all NFT holders. 
						</div>
						<div className="font_general line-height-15 mb-5 wow fadeInRight">
							•	Verifiable smart contracts designed to create trust and Total Blockchain Transparency, and to facilitate the creation and funding of the Community Development Fund wallet.
						</div>
					</div>
					<div className="col-md-12 text-center wow zoomInUp">
						<button 
							className="mint_button btn mt-3"
							onClick={(e) => {
								e.preventDefault();
								comingSoon();
							}}
						>
							MINT
						</button>
					</div>
				</div> */}
			</section>

			<section className="slide-container">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<div className="section_title line-height-15">COOLBEEZ NFT</div>
				</div>
				{/* <div className="coolbeez-content text-center font_general line-height-18 pt-30 wow bounceIn">
					All metaverse real estate, utilities and subsequent revenues generated in the metaverse by the community real estate portfolio will be 100% owned by our NFT holders and held in the CDF. 
					All holders become virtual-landlords in the new virtual world with an equal share in the real estate portfolio based on the number of NFTs that you hold!
					The Community Development Fund will also be used to develop anything from game rooms, events halls and stores to VR meeting and private family rooms. 
				</div> */}
				
				<div className="swiper mySwiper wow fadeIn">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 1.jpg" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 2.jpg" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 3.jpg" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 4.jpg" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 5.jpg" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 6.jpg" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Mascots V3 7.jpg" alt=""/>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</section>
					
			<section className="join-discord">
				<div className="row mx-0">
					<div className="col-md-5 col-sm-12 text-center wow slideInLeft" data-wow-offset="0">
						<img className="discord-bee" src="./assets/images/discord_bee.png"/>
					</div>
					<div className="col-md-7 col-sm-12 text-block d-flex align-items-center text-center wow slideInRight" data-wow-offset="0">
						<div className="pl-md-3">
							<div className="join-discord-title rubik-font">
								JOIN OUR DISCORD
							</div>
							<div className="join-discord-content">
								Do you want to be on the whitelist? 
								Or enter competitions for anything from 1ETH to life changing land-NFT giveaways? 
								Join our Discord to be part of the largest metaverse movement ever!
							</div>
							<a href="https://discord.gg/A2KY3XChPZ" target="_blank">
								<button className="join-button"><i className="fab fa-discord"></i> JOIN DISCORD</button>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="game-section pt-30">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<div className="section_title line-height-15">Why chose one when you can own land in all 3!</div>
				</div>
				<div className="text-center font_general line-height-15 pt-30 wow bounceIn">
					All metaverse real estate, utilities and subsequent revenues generated in the metaverse by the community real estate portfolio will be 100% owned by our NFT holders and held in the CDF. 
					All holders become virtual-landlords in the new virtual world with an equal share in the real estate portfolio based on the number of NFTs that you hold!
					The Community Development Fund will also be used to develop anything from game rooms, events halls and stores to VR meeting and private family rooms. 
				</div>
				<div className="row mx-0 mt-5">
					<div className="col-md-4 col-sm-12 text-center wow rollIn" data-wow-offset="0">
						<div className="game-title rubik-font">Sandbox</div>
						<img className="mt-3 img-thumbnail width-100 game-image" src="./assets/images/sandbox.png"></img>
					</div>
					<div className="col-md-4 col-sm-12 text-center wow rollIn" data-wow-offset="0">
						<div className="game-title rubik-font">Decentraland</div>
						<img className="mt-3 img-thumbnail width-100 game-image" src="./assets/images/decentraland.png"></img>
					</div>
					<div className="col-md-4 col-sm-12 text-center wow rollIn" data-wow-offset="0">
						<div className="game-title rubik-font width-100 game-image">Somniumspace</div>
						<img className="mt-3 img-thumbnail" src="./assets/images/somniumspace.png"></img>
					</div>
				</div>
			</section> */}

			{/* <div className="col-12 text-center d-flex justify-content-center pt-30">
				<span className="section_title gtfcduyjdc wow fadeInUp">THE ROADMAP</span>
			</div>
			<div className="coolbeez-content text-center font_general line-height-18 wow bounceIn pt-30">
				Whilst the My Meta Foundation have an ambitious plan outlined to grow the entire CoolBeez community and it’s portfolio as quickly as possible, the whole purpose of this community is for you to decide the future of the community. 
				There will be votes along the way for all NFT holders but a few key milestones to look out for.
			</div>
			<div className="row mx-0">
				<div className="col-md-5 col-sm-12">
					<div className="roadmap_right_content">
						<div className="mb-5 font_general line-height-15 wow fadeInUp">
							<div className="mb-3 left-roadmap-title">
								<b>Guaranteed passive income based on 12.5% of the collection’s sales is paid to all holders of a CoolBeez NFT for the first 12 months after the presale date. </b>
							</div>
								A wallet has been created to distribute a passive income from the very start which will allow time for the community 
								to purchase the land-NFTs and develop or lease them to generate the communities own passive income going forwards. 
								This will be distributed to holders of the CoolBeez NFT using a smart contract on the MATIC network. 
								<div className="mb-3"></div>
								This is designed to reduce gas fees and maximize returns. 
						</div>
						<div className="mb-5 font_general line-height-15 wow fadeInUp">
							<div className="mb-3 left-roadmap-title">
								<b>Community Development Fund wallet. </b>
							</div>
								This has been created to fund the purchase and development of the land-NFT spaces into revenue generating venues with initial funding coming from 10% of the collection’s sales.
								<div className="mb-3"></div>
								The CDF wallet will also hold the land-NFTs and future revenues generated from the properties. 
								<div className="mb-3"></div>
								The revenues generated will be distributed to holders of the CoolBeez NFT using a smart contract on the MATIC network, again designed to reduce gas fees and maximize returns. The community can decide to retain a percentage of revenues in the CDF wallet to pay for development of the properties or to distribute all the revenues from that period to holders. 
						</div>
						<div className="mb-5 font_general line-height-15 wow fadeInUp">
							<div className="mb-3 left-roadmap-title">
								<b>The benefits of a community. </b>
							</div>
								The CoolBeez collection is part of the <a href="https://www.mymetafoundation.org/" target="_blank">My Meta Foundation</a> which is a platform for NFT collections like CoolBeez. 
								As each NFT collection is released the community, Community Development Fund and property portfolio grows. 
								The value of a <a href="https://www.mymetafoundation.org/" target="_blank">My Meta Foundation</a> NFT will grow as the community grows which make this community a unique opportunity to be part of the development of the future of the metaverse. 
						</div>
					</div>
				</div>
				
				<div className="col-md-7 col-sm-12">
					<section className="roadmap pb-5">
						<div className="roadmap_title_back"></div>
						<div className="top_one container-fluid mt-5 roadmap-padding">
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">March (dates TBC)</span>
											</div>
											<div className="font_general line-height-12">
												CoolBeez Smart Contract deployed. <br/>
												CoolBeez Whitelist Presale. <br/>
												CoolBeez Public Sale.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"></span>
												<span className="top_title line-height-12">April</span>
											</div>
											<div className="font_general line-height-12">
												Anti-Social Elephant Club collection design.<br/>
												Website and social creation
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-3">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">May</span>
											</div>
											<div className="font_general line-height-12">
												Anti-Social Elephant Club collection social media channels and marketing active. <br/>
												Whitelisting and Discord opening for Anti-Social Elephant Club collection. 
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">June</span>
											</div>
											<div className="font_general line-height-12">
												Anti-Social Elephant Club Smart Contract deployed.<br/>
												Anti-Social Elephant Club Whitelist Presale.<br/>
												Anti-Social Elephant Club Airdrop to previously whitelisted CoolBeez holders.<br/>
												Anti-Social Elephant Club Public Sale.<br/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">July</span>
											</div>
											<div className="font_general line-height-12">
												Pretty But Deadly collection social media channels and marketing active. <br/>
												Whitelisting and Discord opening for Anti-Social Elephant Club collection.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">August</span>
											</div>
											<div className="font_general line-height-12">
												Pretty But Deadly collection Smart Contract deployed.<br/>
												Pretty But Deadly collection Whitelist Presale.<br/>
												Pretty But Deadly collection Airdrop to previously whitelisted CoolBeez holders.<br/>
												Pretty But Deadly collection Public Sale.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">September</span>
											</div>
											<div className="font_general line-height-12">
												Create 4th NFT collection launch as voted on by the community.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-3 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-2">
										<div className="col-md-1 col-2 d-inline dot_data p-0">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-12">The Future</span>
											</div>
											<div className="font_general line-height-12">
												The future is your hands!
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div> */}			

			{/* <section className="section-qa">
				<div className="col-12 text-center d-flex justify-content-center">
					<span className="section_title gtfcduyjdc wow fadeInUp">FAQS</span>
				</div>
				<div className="content container-fluid mt-md-5 mt-4 footer-padding">
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">What is CoolBeez?</h1>
						</button>
						<div className="panel">
							<p>CoolBeez is a Community NFT collection with unique holder benefits and is part of the My Meta Foundation. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">When will the CoolBeez NFT collection be launched and minted?</h1>
						</button>
						<div className="panel">
							<p>The CoolBeez NFT collection is expected to be launched and minted by the end of March 2022. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">What is the expected floor price for CoolBeez? </h1>
						</button>
						<div className="panel">
							<p>The expected floor price of the CoolBeez NFT collection will be announced on our Discord server shortly. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">Where can I buy a CoolBeez NFT? </h1>
						</button>
						<div className="panel">
							<p>You can get hold of a CoolBeez NFT by visiting OpenSea or directly from this page by linking your wallet. CoolBeez NFT collection on OpenSea: https://opensea.io/collection/coolbeez </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">When will the Whitelist be available? </h1>
						</button>
						<div className="panel">
							<p>The Whitelist for the CoolBeez NFT collection will be opened by mid-February 2022, but due to the increasing demand that we have already, we may bring this forward. 
								Places are limited but the first 100 members to join our discord will be guaranteed a place. 
								Places will also be available through giveaways and competitions hosted on Discord.</p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">What utility does the CoolBeez NFT have?  </h1>
						</button>
						<div className="panel">
							<p>CoolBeez NFT owners will own a share in the Community Development Fund and in the virtual metaverse real estate portfolio. Each NFT you hold allows you one vote to decide how the CDF is used to develop the metaverse land that the community owns. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">How will you grow the community after the CoolBeez collection is sold out? </h1>
						</button>
						<div className="panel">
							<p>The CoolBeez collection is part of the My Meta Foundation. The foundations road map is to release 6 NFT collections throughout 2022 and 2023. The next in the series is ‘Anti-Social Elephant Club’ with work on the project already underway. Holders of all future NFT collections will join the community and proceeds from the sales of the collections will be donated to the same Community Development Fund. As the community grows, so does the fund and the portfolio.</p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-0">
							<h1 className="footer-font">Why does the project support good causes and how will that affect the Community Development Fund?</h1>
						</button>
						<div className="panel">
							<p>We believe that the Future of Giving lays in the power of Web 3.0 and we want to create a bridge between our two worlds. The creators will donate a percentage of the foundation’s profits to good causes. The Community Development Fund will NOT be used for charitable donations unless the community decide to do so. </p>
						</div>
					</div>
				</div>
			</section> */}

			<section className="team-section">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<div className="section_title line-height-15">MEET OUR TEAM</div>
				</div>
				<div className="row mx-0">
					<div className="col-lg-1 col-md-0"></div>
					<div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/Mascots V3 1.png"/>
						<div className="team-caption">
							Founder <br/>
							Dan Maguire 
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/Mascots V3 2.png"/>
						<div className="team-caption">
							Co-Founder <br/>
							Bart Vonk 
						</div>
					</div>
					<div className="col-lg-0 col-md-3 col-sm-0 bingo-col"></div>
					<div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/Mascots V3 3.png"/>
						<div className="team-caption">
							Visionary <br/>
							Ella Maguire 
						</div>
					</div>
					<div className="col-lg-0 col-md-3 col-sm-0 bingo-col"></div>
					<div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/Mascots V3 4.png"/>
						<div className="team-caption">
							Dev <br/>
							Malin Zhang
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/Mascots V3 5.png"/>
						<div className="team-caption">
							Artist <br/>
							Anon
						</div>
					</div>
					<div className="col-lg-1 col-md-0"></div>
				</div>
			</section>

		   {/* <section className="social-links text-center">
				<a href="https://twitter.com/CoolBeezNFT" target="_blank">
					<i className="fab fa-twitter social-icon"></i>
				</a>
				<a href="https://www.facebook.com/coolbeeznft" target="_blank">
					<i className="fab fa-facebook social-icon"></i>
				</a>
				<a href="https://www.instagram.com/coolbeeznft/" target="_blank">
					<i className="fab fa-instagram social-icon"></i>
				</a>
				<a href="https://www.instagram.com/coolbeeznft/" target="_blank">
					<img className="opensea-image" src="./assets/images/opensea.png"/>
				</a>
				<a href=" https://www.mymetafoundation.org/" target="_blank">
					<i className="fa fa-link social-icon"></i>
				</a>
			</section>  */}
		</div>
    </div>
  );
}

export default App;
