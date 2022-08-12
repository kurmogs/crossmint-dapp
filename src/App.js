import React, { useEffect, useState, useRef } from "react";
import swal  from 'sweetalert';

function App() {
  const comingSoon = () => {
	swal("Minetopia NFT coming soon", "", "info");
  }

  return (
    <div>
		<nav className="container-fluid wow fadeInDown">
			<div className="logo">
				<img className="logo-image" src="./assets/images/full_logo.png"/>
				<div className="navbar_right">
					<button className="connect-button btn ml-2"><i className="fa-solid fa-network-wired"></i> CONNECT</button>
				</div>
			</div>		
		</nav>

		<section className="hero-section wow zoomIn">
			<video className="landing-video width-100" autoPlay="true" muted loop>
				<source src="./assets/images/ethereum_classic.mp4" type="video/webm"></source>
			</video>
		</section>
		
		<div className="main-container">
			<section className="about-section">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<span className="section_title line-height-15">WELCOME TO THE MINETOPIA</span>
				</div>
				<div className="text-center pt-30 px-5 line-height-15 font_general wow fadeInUp">
					Minetopia presents an opportunity for individuals to enter mining through the utility of Non-fungible 
					Tokens (NFTs). The potential mining options will include Bitcoin (BTC), Ethereum Classic (ETC), 
					Kadena (KDA), and Litecoin (LTC) with free Dogecoin (DOGE). As such, the project has found the 
					blockchain to be a perfect form of distribution for mining rewards and achieving community-centric 
					goals. Minetopia is built with the expertise of well-versed marketers, developers, and designers who 
					desire to work with a community to change the world for the betterment of earnings moving 
					forward.
				</div>
				<div className="row mx-0 px-0 pt-30">
					<div className="col-md-6 mt-md-0 px-5 mr-0">
						<div className="font_general line-height-15 mb-5 wow fadeInLeft">
							•	NFTs are unique tokenized representations of digital files exchanged on public blockchains. In the 
								first quarter of 2022, an estimated $8 billion* NFT transactions were generated. NFTs are clearly 
								gaining momentum day by day. While the prices of individual NFTs vary, fascinating use cases for 
								NFTs are still emerging and the groundwork for their long-term utility is being built for seamless 
								integration into our daily lives.
						</div>
					</div>
					<div className="col-md-6 px-5">
						<div className="font_general line-height-15 mb-5 wow fadeInRight">
							•	Like cryptocurrencies, NFTs are issued on a blockchain or decentralized ledger and are used to 
								designate ownership of a certain asset and/or contract. Each NFT is tied to unique data, typically a 
								digital content file or reference, and governed by a smart contract. The process of converting this data 
								into a Non-fungible Token is referred to as minting. Once minted, the NFT is written to the applicable 
								blockchain database. 
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
				</div>
			</section>

			<section className="slide-container">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<div className="section_title line-height-15">MINETOPIA NFT</div>
				</div>
				<div className="coolbeez-content text-center font_general line-height-18 pt-30 wow bounceIn">
					Minetopia is driven to provide a variety of mining opportunities for those who wish to participate through owning a Minetopia NFT. 
					Participating in a project that utilizes NFTs to give a stake or ownership in a miner’s reward could boost an individual’s portfolio to the next level through sustainable returns driven by community-purchased ASIC miners.
				</div>
				
				<div className="swiper mySwiper wow fadeIn">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Ethereum.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Kadena.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Ethereum.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Kadena.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Ethereum.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Kadena.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Ethereum.png" alt=""/>
						</div>
						<div className="swiper-slide">
							<img className="slide_image img-thumbnail" src="./assets/images/Kadena.png" alt=""/>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</section>
					
			<section className="join-discord">
				<div className="row mx-0">
					<div className="col-md-5 col-sm-12 text-center wow slideInLeft" data-wow-offset="0">
						<img className="discord-bee" src="./assets/images/half_logo_trans.png"/>
					</div>
					<div className="col-md-7 col-sm-12 text-block d-flex align-items-center text-center wow slideInRight" data-wow-offset="0">
						<div className="pl-md-3">
							<div className="join-discord-title rubik-font">
								JOIN OUR DISCORD
							</div>
							<div className="join-discord-content">
								Do you want to be on the whitelist? 
								Or do you want to be a member of our DAO? 
								Join our Discord to be part of the largest movement ever!
							</div>
							<a href="https://discord.gg/" target="_blank">
								<button className="join-button"><i className="fab fa-discord"></i> JOIN DISCORD</button>
							</a>
						</div>
					</div>
				</div>
			</section>

			<div className="col-12 text-center d-flex justify-content-center pt-30">
				<span className="section_title gtfcduyjdc wow fadeInUp">THE ROADMAP</span>
			</div>
			<div className="text-center font_general line-height-18 wow bounceIn pt-30">
				Mints are subject to change to meet demand
			</div>
			<div className="row mx-0">
				<div className="col-md-12 col-sm-12">
					<section className="roadmap pb-5">
						<div className="roadmap_title_back"></div>
						<div className="top_one container-fluid mt-5 roadmap-padding">
							<div className="row pb-4 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-4">
										<div className="col-md-1 col-2 d-inline dot_data p-2">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
									
												<span className="top_title line-height-18">PHASE 01 (AUG 2022)</span>
											</div>
											<div className="font_general line-height-18">
												1000 NFTs ($250) will be released, 10-40 
												miners (Ethereum Classic) depending on 
												which model and will be deployed within 
												15 days.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-4 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-4">
										<div className="col-md-1 col-2 d-inline dot_data p-2">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"></span>
												<span className="top_title line-height-18">PHASE 02 (OCT 2022)</span>
											</div>
											<div className="font_general line-height-18">
												1000 NFTs ($300) will be released, 10-40 
												miners (Litecoin - Subject to change) 
												depending on which model and will be 
												deployed within 15 days.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-4 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-3">
										<div className="col-md-1 col-2 d-inline dot_data p-2">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-18">PHASE 03 (JAN 2023)</span>
											</div>
											<div className="font_general line-height-18">
												1000 NFTs ($350) will be, released 10-40 
												miners (Kadena - Subject to change) 
												depending on which model and will be 
												deployed within 15 days. 
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row pb-4 mx-0 position-relative mx-0 wow fadeInUp">
								<div className="col-md-12">
									<div className="row rounded roadmap_round py-4">
										<div className="col-md-1 col-2 d-inline dot_data p-2">
											<span className="dot"></span>
										</div>
										<div className="col-md-11 col-10 d-inline mt-0">
											<div className="">
												<span className="top_title_num roadmap_font"> </span>
												<span className="top_title line-height-18">PHASE 04 (FEB 2023)</span>
											</div>
											<div className="font_general line-height-18">
												1000 NFTs ($400) will be released, 10-40 
												miners (BTC - Subject to change) 
												depending on which model and will be 
												deployed within 15 days
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>		

			<section className="team-section">
				<div className="col-12 text-center d-flex justify-content-center wow fadeInUp">
					<div className="section_title line-height-15">MEET OUR TEAM</div>
				</div>
				<div className="row mx-0 my-5">
					<div className="col-lg-3 col-md-6 col-sm-12 text-center wow zoomInUp my-3" data-wow-offset="0">
						<img className="team-image" src="./assets/images/Minetopia.png"/>
						<div className="team-caption">
							WESTIE
						</div>
						<div className="team-desc">
							<div className="my-2">CEO</div>
							<div className="twitter">Twitter</div>
							<a className="color-white" target="_blank" href="">@Westieio</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 text-center wow zoomInUp my-3" data-wow-offset="0">
						<img className="team-image" src="./assets/images/christine.png"/>
						<div className="team-caption">
							CHRISTINE
						</div>
						<div className="team-desc">
							<div className="my-2">CMO</div>
							<div className="my-2">Chief Marketing Officer</div>
							<div className="twitter">Twitter</div>
							<a className="color-white" target="_blank" href="">@OnlyEyes4Crypto</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 text-center wow zoomInUp my-3" data-wow-offset="0">
						<img className="team-image" src="./assets/images/dxniel.png"/>
						<div className="team-caption">
							DXNIEL.ETH
						</div>
						<div className="team-desc">
						    <div className="my-2">CCO</div>
							<div className="my-2">ChiefCommercialOfficer</div>
							<div className="twitter">Twitter</div>
							<a className="color-white" target="_blank" href="">@Dxniel.ETH</a>
						</div>
					</div>
					{/* <div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/cryptodreko.png"/>
						<div className="team-caption">
							CRYPTODREKO
						</div>
						<div className="team-desc">
							<div className="my-2">Project Advisor</div>
							<div className="twitter">Twitter</div>
							<a className="color-white" target="_blank" href="">@CryptoDreko</a>
						</div>
					</div> */}
					<div className="col-lg-3 col-md-6 col-sm-12 text-center wow zoomInUp my-3" data-wow-offset="0">
						<img className="team-image" src="./assets/images/mummydumbo.png"/>
						<div className="team-caption">
							MUMMYDUMBO
						</div>
						<div className="team-desc">
							<div className="my-2">CMO</div>
							<div className="my-2">ChiefMarketingOfficer</div>
							<div className="off-chain">(Off-Chain)</div>
						</div>
					</div>
					{/* <div className="col-lg-2 col-md-6 col-sm-12 text-center wow zoomInUp" data-wow-offset="0">
						<img className="team-image" src="./assets/images/wealthdash.png"/>
						<div className="team-caption">
							WEALTHDASH
						</div>
						<div className="team-desc">
							<div className="my-2">Project Advisor</div>
							<div className="twitter">Twitter</div>
							<a className="color-white" target="_blank" href="">@dash_wealth</a>
						</div>
					</div> */}
				</div>
			</section>

			<section className="section-qa">
				<div className="col-12 text-center d-flex justify-content-center">
					<span className="section_title my-0 py-0 gtfcduyjdc wow fadeInUp">FAQS</span>
				</div>
				<div className="content container-fluid mt-md-5 mt-4 footer-padding">
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">What is DAO?</h1>
						</button>
						<div className="panel">
							<p>DAO is an organization managed by a project’s 
								token holders and governed by rules written into smart contracts and deployed to the blockchain. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">Why Ethereum?</h1>
						</button>
						<div className="panel">
							<p>Ethereum Blockchain is quickly becoming a popular choice for a large number of people. Numerous 
								cryptocurrency projects are launched in the following years based on its platform and ERC20 tokens.</p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">When will the Minetopia NFT collection be launched and minted?</h1>
						</button>
						<div className="panel">
							<p>The Minetopia NFT collection is expected to be launched and minted by the end of August 2022. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">What is the expected floor price for Minetopia? </h1>
						</button>
						<div className="panel">
							<p>The expected floor price of the Minetopia NFT collection will be announced on our Discord server shortly. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">Where can I buy a Minetopia NFT? </h1>
						</button>
						<div className="panel">
							<p>You can get hold of a Minetopia NFT by visiting OpenSea or directly from this page by linking your wallet.</p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">What utility does the Minetopia NFT have?  </h1>
						</button>
						<div className="panel">
							<p>Minetopia NFT owners will own a share in the Community Development Fund and in the virtual metaverse real estate portfolio. Each NFT you hold allows you one vote to decide how the CDF is used to develop the metaverse land that the community owns. </p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">How will you grow the community after the Minetopia collection is sold out? </h1>
						</button>
						<div className="panel">
							<p>The Minetopia collection is part of the My Meta Foundation. The foundations road map is to release 6 NFT collections throughout 2022 and 2023. The next in the series is ‘Anti-Social Elephant Club’ with work on the project already underway. Holders of all future NFT collections will join the community and proceeds from the sales of the collections will be donated to the same Community Development Fund. As the community grows, so does the fund and the portfolio.</p>
						</div>
					</div>
					<div className="mt-2 accordion-container footer_round wow slideInRight">
						<button className="accordion py-1">
							<h1 className="footer-font">Why does the project support good causes?</h1>
						</button>
						<div className="panel">
							<p>We believe that the Future of Giving lays in the power of Web 3.0 and we want to create a bridge between our two worlds.</p>
						</div>
					</div>
				</div>
			</section>

		   <section className="social-links text-center">
				<a href="https://twitter.com/" target="_blank">
					<i className="fab fa-twitter social-icon"></i>
				</a>
				<a href="https://www.youtube.com/" target="_blank">
					<i className="fab fa-youtube social-icon"></i>
				</a>
				<a href="https://www.instagram.com/" target="_blank">
					<i className="fab fa-discord social-icon"></i>
				</a>
			</section> 
			{/* <section className="copyright-section font_general text-center">
				Copyright <i className="far fa-copyright"></i> 2022 All Rights Reserved.
			</section> */}
		</div>
    </div>
  );
}

export default App;
