import React, {useEffect}from "react";
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from "react-faq-component";
import Slider from "./Slider";

function Home() {

    //  FAQ function start

    const data = {
        // title: "FAQ (How it works)",
        rows: [
            {
                title: "WHAT ARE NONCHALANT BANDITS?",
                content: `Nonchalant Bandits are 10,000 unique NFTs generated from hand drawn traits. There are no two the same and collecting these tokens will bring you many opportunities...please check out our benefits and road map.`,
            },
            {
                title: "ARE SOME RARER THAN OTHERS",
                content:
                    "The short answer is yes. Although they are randomly generated, some traits are more rare than others. All NFTs will be distributed randomly when minted, so no one knows what Bandit they've got until reveal. All will be revealed 2-4 days after the collection mints out.",
            },
            {
                title: "HOW MUCH WILL THE NFTS BE?",
                content: `All NFTs from collection one will be approximately 190 GBP. This equates to around £9 per round of golf if you hold it for the 10 years. There will be a maximum of 5 NFTs per wallet, per collection allowed.`,
            },
            {
                title: "WHY WOULD I PURCHASE 5 IF I ONLY GET THE BENEFITS OF OWNING 1?",
                content:`To put it simply, as an investment. The more exclusive the golf club becomes, the more your NFT’s will be worth and the more you can sell them for.`,
            },
            {
                title: "HOW DO I GET MY HANDS ON ONE?",
                content: `We'll be running various competitions via our socials and discord channel for Whitelist spots. Minting will be available here on our website. You will be able to purchase using your debit or credit card, but you will require a MetaMask wallet. To download a MetaMask  wallet, please follow the step by step guide we've provided on the website`,
            },
            {
                title: "WHEN WILL THEY BE ON SALE?",
                content: `The actual date of public minting is unknown yet. The presale for people on the whitelist will be 24 hours prior to public sale.
                There will only be 1,000 whitelist spots available, so head to our discord channel to get yourself on it. `,
            },
   
           
           
          
        ],
    };
    const styles = {
        bgColor: '@000',
        titleTextColor: "blue",
        rowTitleColor: " #000000",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    
    //  FAQ function end

    // AOS Function start
    useEffect(() => {
        AOS.init();
      }, []
      )
    // AOS Function end
  return (
    <div >
      <div className="hero" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5">
        <div className="hero-content">
        <div className="hero-title">
          <h2 className="title1">10,000 NONCHALANT BANDITS </h2>
          <h2 className=" title2">SHAPING THE COURSE OF GOLF </h2>
          <h2 className="title3">MINTING – TBC</h2>
          <div className="hero_btn-2">
                <a  href="https://discord.com/invite/PXXTjYuNym" target="_blank" rel="noreferrer"><img src="../assets/img/hero/discord.png" alt="" className="mobile-btnss"/>join discord</a>
            </div>
          </div>
          
            <div>
               <img className="hero_img" src="../assets/img/hero/1.webp" alt="nonchalantbanditnft" />
            </div>
            <div className="hero_btn">
                <a  href="https://discord.com/invite/PXXTjYuNym" target="_blank" rel="noreferrer"><img src="../assets/img/hero/discord.png" alt=""/>join discord</a>
            </div>
          {/* <img src="assets/img/hero/1.png" alt="" className="hero-img" /> */}
        </div>
      </div>

      <section>
        <div className="unique " data-aos="fade-up" data-aos-duration="1500" data-aos-delay="12">
          <div className="container"> 
                  <div className="unique_box">
                  <div className="unique-title"> <h2>nonchalant bandit golf club</h2></div>
                  <div className="unique-wrapper">
                            
                            <div className="unique-content">
                                <p>
                                Walking the digital fairways of the Metaverse are a nursery of 10,000 Bandits. Nonchalantly giving 2 fcuks about dress codes or out of date rules and regulations. They’re just here to have a good time and enjoy some golf and banter.

                                Each Bandit is unique, with different fur colours, clothing, headwear, accessories and more.

                                The Nonchalant Bandit Golf Club will be a members club like no other. We're looking to be one of the most exclusive golf clubs IRL and the Metaverse. It’ll be so unique that everyone will want your NFT off you!
                                </p>
                            </div>
                        <div className="">
                            <div className="unique-img">
                                <div className="unique_img_club">
                                    <img src="assets/img/uniquepng.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>
   

      <section>
        <div className="image-marque cpy-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="12" >
          <Marquee >
            <img src="assets/img/marque.png" alt="" />
            <img src="assets/img/marque.png" alt="" />
            <img src="assets/img/marque.png" alt="" />
            <img src="assets/img/marque.png" alt="" />
          </Marquee >
        </div>
      </section>
    <div className="section_bg">
               {/* <=========Benifits section start=========> */}
               <section>
            <div className="benifits cpy-8" id="about-us" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="12">
                <div className="container">
                    <div className="benifits_wrapper row">
                        <div className="benifits_wrapper_left  col-md-12" >
                            <div className="benifits_title">
                                <h2>benefits</h2>
                            </div>
                            <div className="benifits_disc_box">
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        <p>Exclusive access to our golf course, not available for non NFT holders</p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        <p>Be able to interact with other NFT holders from all over the world via the metaverse</p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        <p>The opportunity to be involved in golf clinics held in real life and via the metaverse</p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        {/* <p>Free NBGC hat for holders of Collection One hat pre wallet and delivery cost not included</p> */}
                                        <p>Free NBGC hat for holders of Collection One<span>*</span></p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        <p>Access to purchase merchandise not available to the public</p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        <p>Personalised options with your own NFT</p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        <p>Be part of a community that helps the environment and grow the game of golf</p>
                                    </div>
                                </div>
                                <div className="benifits_dics_item d-flex gap-2">
                                    <div className="benifits_rounde"></div>
                                    <div className="benifits_disc">
                                        {/* <p>The potential to make money if and when you opt to sell an NFT this is no a guarantee, and we advise anyone to take finacial advise if they are unsure</p> */}
                                        <p>The potential to make money if and when you opt to sell an NFT<span>**</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_roadmap_text">
                                <div className="roadmap_text_list">
                                    {/* <div className="phase_rounde rounde"></div> */}
                                    <div className="phase_disc_item">
                                        <p>*one hat per wallet and delivery cost not included</p>
                                    </div>
                                    <div className="phase_disc_item">
                                        <p>**the is not a guarantee and we advise anyone to take financial advice if they are unsure</p>
                                    </div>
                                </div>
                       
                            </div>
                        </div>
                        <div className="benifits_wrapper_right  col-md-12" >
                            <div className="benifits_wrapper_right_items row">
                                <div className="col-lg-12 col-md-12 d-flex ">
                                    <div>
                                        <img  src="../assets/img/benifits/1.png" alt="" />
                                    </div>
                                    <div>
                                        <img  src="../assets/img/benifits/2.png" alt="" />
                                    </div>
                                    <div>
                                        <img className="first_img" src="../assets/img/benifits/3.png" alt="" />
                                    </div>
                                    
                                </div>
                                <div className="col-lg-12 col-md-12 d-flex">
                                    <div>
                                        <img  src="../assets/img/benifits/4.png" alt="" />
                                    </div>
                                    <div>
                                        <img  src="../assets/img/benifits/5.png" alt="" />
                                    </div>
                                    <div>
                                        <img  src="../assets/img/benifits/6.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 d-flex">
                                    <div>
                                        <img  src="../assets/img/benifits/7.png" alt="" />
                                    </div>
                                    <div>
                                        <img  src="../assets/img/benifits/8.png" alt="" />
                                    </div>
                                    <div>
                                        <img className="last_img"  src="../assets/img/benifits/9.png" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                 
                </div>
            </div>
        </section>

       {/* <=========Benifits section end=========> */}

        {/* <===========roadmap Section start============> */}
      <section>
            <div className="roadmap cpy-8 " id='roadmap' data-aos="fade-up" data-aos-duration="800" data-aos-delay="5">
                <div className="container">
                    <div className="roadmap_title text-center cpy-5"  >
                        <h2>roadmap</h2>
                    </div>
                    <div className="phase mt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="5">
                       
                        <div className="phase_title1 ">
                            <h2 >PHASE 01</h2>
                                <div className="phase_disc_left_img d-flex justify-content-center">
                                    <div className='phase_box_left_height'>
                                        <div className="charts-container">
                                            <div className="chart">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="../assets/img/phase1.svg" alt="" width={300} height={300}/>
                                </div>
                        </div>
                       
                        <div className="phase_box d-flex justify-content-end">
                            <div className="phase_disc ">
                                <div className="phase_disc_list d-flex  ">
                                    <div className="phase_rounde rounde"></div>
                                    <div className="phase_disc_item">
                                        <p>100 NFTs given away to early supporters</p>
                                    </div>
                                </div>
                                <div className="phase_disc_list d-flex  ">
                                    <div className="phase_rounde rounde"></div>
                                    <div className="phase_disc_item">
                                        <p>1,000 Whitelist spots for discounted presale (24 hours before Mint)</p>
                                    </div>
                                </div>
                                <div className="phase_disc_list d-flex">
                                    <div className="phase_rounde"></div>
                                        <div className="phase_disc_item">
                                            <p>Mint remaining NFTs of Collection One</p>
                                        </div>
                                    </div>
                                    <div className="phase_disc_list d-flex  ">
                                        <div className="phase_rounde "></div>
                                        <div className="phase_disc_item">
                                            <p>Donate $50,000 each to UK and US Kid’s golf foundations</p>
                                        </div>
                                    </div>
                                    <div className="phase_disc_list d-flex ">
                                        <div className="phase_rounde "></div>
                                        <div className="phase_disc_item">
                                            <p>Plant 50,000 trees</p>
                                        </div>
                                    </div>
                                    <div className="phase_disc_list d-flex ">
                                        <div className="phase_rounde "></div>
                                        <div className="phase_disc_item">
                                            {/* <p>Send all holders of a Collection One NFT a unique hat not available to the public one hat per wallet and delivery cost not included</p> */}
                                            <p>Send all holders of a Collection One NFT a unique hat not available to the public <span>*</span></p>
                                        </div>
                                    </div>
                                    <div className="phase_disc_list d-flex ">
                                        <div className="phase_rounde "></div>
                                        <div className="phase_disc_item">
                                            <p>MONTHLY GIVEAWAYS COMMENCE, WITH ONE HOLDER A MONTH WINNING 2 ETH UNTIL PHASE 02 STARTS</p>
                                        </div>
                                    </div>
                                   
                            </div>
                        </div>
                    
                    </div>
                    <div className="phase mt-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="8">
                       
                            <div className="phase_title1 phase_title2 text-end">
                                <h2 >PHASE 02</h2>
                                    <div className="phase_disc_left_img2 d-flex justify-content-center">
                                        <img src="../assets/img/phase2.svg" alt="" width={300} height={300}/>
                                        <div className='phase_box_left_height'>
                                            <div className="charts-container">
                                                <div className="chart chart2">
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        
                        <div className="phase_box d-flex justify-content-start">
                            <div className="phase_disc text-end">
                                <div className="phase_disc_list d-flex  justify-content-end">
                                
                                    <div className="phase_disc_item">
                                        {/* <p>Holders of Collection One get a discounted Collection Two NFT, with priority access one  discounted Collection Two NFT pre wallet</p> */}
                                        <p>Holders of Collection One get a discounted Collection Two NFT, with priority access <span>**</span></p>
                                    </div>
                                    <div className="phase_rounde rounde"></div>
                                </div>
                                <div className="phase_disc_list d-flex justify-content-end">
                                
                                        <div className="phase_disc_item">
                                            <p>Mint remaining NFTs of Collection Two</p>
                                        </div>
                                        <div className="phase_rounde rounde"></div>
                                    </div>
                                    <div className="phase_disc_list d-flex justify-content-end ">
                                        
                                        <div className="phase_disc_item">
                                            <p>Donate further funds to the development of children’s golf</p>
                                        </div>
                                        <div className="phase_rounde rounde"></div>
                                    </div>
                                    <div className="phase_disc_list d-flex justify-content-end">
                                        
                                        <div className="phase_disc_item">
                                            <p>Launch official merchandise, only available to purchase by token holders</p>
                                        </div>
                                        <div className="phase_rounde rounde"></div>
                                    </div>
                                    <div className="phase_disc_list d-flex justify-content-end">
                                        
                                        <div className="phase_disc_item">
                                            <p> FURTHER MONTHLY GIVEAWAYS OF ETH UNTIL PHASE 03 COMMENCES </p>
                                        </div>
                                        <div className="phase_rounde rounde"></div>
                                    </div>
                                   
                            </div>
                        </div>
                    
                    </div>
                    <div className="phase mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10">
                
                        <div className="phase_title1 ">
                            <h2 >PHASE 03</h2>
                                <div className="phase_disc_left_img d-flex justify-content-center">
                                    <div className='phase_box_left_height'>
                                        <div className="charts-container">
                                            <div className="chart">
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="../assets/img/phase3.svg" alt="" width={300} height={300}/>
                                </div>
                        </div>
                        
                        <div className="phase_box d-flex justify-content-end">
                            <div className="phase_disc ">
                                <div className="phase_disc_list d-flex  ">
                                    <div className="phase_rounde rounde"></div>
                                    <div className="phase_disc_item">
                                        {/* <p>Holders of both collections One AND Two receive a FREE NFT from Collection Three one free NFT pre wallet and must own a Collection One AND Two NFT at time of Collection three mint</p> */}
                                        <p>If you hold the maximum of 5 NFT’s from both Collections 1 AND 2, you will receive a free Collection 3 NFT <span>***</span> </p>
                                    </div>
                                </div>
                                <div className="phase_disc_list d-flex">
                                    <div className="phase_rounde"></div>
                                        <div className="phase_disc_item">
                                            <p>Mint remaining NFTs of Collection Three</p>
                                        </div>
                                    </div>
                                    <div className="phase_disc_list d-flex  ">
                                        <div className="phase_rounde "></div>
                                        <div className="phase_disc_item">
                                            <p>Purchase a golf course in the UK and renovate it to a premium standard</p>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
              
            </div>
            <div className="phase mt-5 phase-f" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="12">
                    <div className="phase_title1 phase_title2 text-end">
                        <h2 >PHASE 04</h2>
                            <div className="phase_disc_left_img2 d-flex justify-content-center">
                                <img src="../assets/img/phase4.svg" alt="" width={300} height={300}/>
                                <div className='phase_box_left_height'>
                                    <div className="charts-container">
                                        <div className="chart">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
               
                <div className="phase_box d-flex justify-content-start">
                    <div className="phase_disc text-end ">
                        <div className="phase_disc_list d-flex  justify-content-end">
                           
                            <div className="phase_disc_item">
                                <p>Announcement of Project 2 location</p>
                            </div>
                            <div className="phase_rounde rounde"></div>
                        </div>
                        
                    </div>
                </div>
              
            </div>
                    <div className="add_roadmap_text" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="12">
                        <div className="roadmap_text_list">
                            {/* <div className="phase_rounde rounde"></div> */}
                            <div className="phase_disc_item_item2">
                                <p>*one hat per wallet and delivery cost not included</p>
                            </div>
                            <div className="phase_disc_item_item2">
                                <p>**one discounted Collection Two NFT per wallet</p>
                            </div>
                            <div className="phase_disc_item_item2">
                                <p>***one free NFT per wallet and must own a Collection One AND Two NFT at time of Collection Three mint</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
      </section>
       {/* <===========roadmap Section end============> */}
          {/* <========Work section start===========> */}
          <section>
            <div className="work "  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="12">
                <div className="container">
                    <div className="work_wrapper">
                        <div className="work_title"  >
                            <h2>how it works</h2>
                        </div>
                        <div className="work_wrapper_box">
                            <div className="work_left_box"></div>
                            <div className="work_right_box"></div>
                        
                            <div className="work_details"  >
                                
                                <div className="work_details_list"  >
                                    <div className="work_logo">
                                        <img src="../assets/img/logo.png" alt="" />
                                    </div>
                                    <p>Own 1 NFT<span className="top">*</span> from any collection  – <span>Play the course with a guest, once a year, every year, for 10 years from the date of golf club opening.</span></p>
                                </div>
                                <div className="work_details_list"  >
                                    <div className="work_logo">
                                        <img src="../assets/img/logo.png" alt="" />
                                    </div>
                                    <p>Own an NFT<span className="top">**</span> from any two collections  -<span> Play the course with a guest, twice a year, every year, for 10 years from the date of golf club opening. </span></p>
                                </div>
                                <div className="work_details_list"  >
                                    <div className="work_logo">
                                        <img src="../assets/img/logo.png" alt="" />
                                    </div>
                                    <p>Own an NFT<span className="top">***</span> from all three collections  –<span> Play the course with a guest, three times a year, every year, for 10 years from the date of golf club opening. You will also get the option to join the golf club as a full member (membership fees TBD).</span></p>
                                </div>
                                <div className="work_details_list"  >
                                <span>As soon as you sell your NFT, you lose all benefits and the new owner will now be entitled to play the golf course. If, for example, the green fee has already been redeemed for that NFT in the year, the new owner will not be entitled to a green fee until the following year.</span>
                                </div>
                                <div className="work_details_list" >
                                <span>Each NFT has a 10 year shelf life from the date of the golf course opening. If transferred or sold to a new holder, they will only have the benefits for the remainder of that 10 year period. </span>
                                </div>
                                <div className="work_details_list"  >
                                <span>NFT holders will be able to purchase additional green fees at an extra cost.</span>
                                </div>
                                <div className="work_details_list"  >
                                <span>If you only get the benefit once per wallet, why would you mint more than one per collection? The answer is simple, to hopefully sell them for a profit. The more exclusive this club is, the more people will want to play it, so the value will increase.</span>
                                </div>
                                <div className="work_details_list last mt-3"  >
                                    <p>*max 1 round per wallet</p>
                                </div>
                                <div className="work_details_list last"  >
                                    <p>*max 2 round per wallet</p>
                                </div>
                                <div className="work_details_list last"  >
                                    <p>*max 3 round per wallet</p>
                                </div>
                            </div>
                            <div className="work_bottom_box"></div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    {/* <========Work section end===========> */}
    
    {/* <================metamask section start=================> */}
    <div className="metamask cpy-8">
            <div className="container">
                <div className="metamask_wrapper">
                    <div className="metamask_title">
                        <h2>STEP BY STEP GUIDE ON HOW TO DOWNLOAD A METAMASK WALLET</h2>
                    </div>
                    <div className="metamask_box">
                        {/* <img src="../assets/img/metamask.svg" alt="" /> */}
                        <div className="metamask_video">
                            <iframe id="frame1" src="https://www.youtube.com/embed/yWfZnjkhhhg" />
                         
                        </div>
                    </div>
                </div>
            </div>
            <div className="metamask_bottom_background"></div>
            <div className="metamask_img">
                <img src="../assets/img/faq2.png" alt="" />
                
            </div>
      </div>

    {/* <================metamask section end=================> */}
      

   


        {/* slider section start */}
        <div id="slider" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5"> 
          <div className="container">
            <Slider />
          </div>
        </div>
          
        {/* slider section start */}
    {/* <===========team section start============> */}
        <section>
            <div className="team cpy-8" id="team" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5">
                <div className="container">
                    <div className="team_wrapper">
                        <div className="team_title" >
                            <h2>Nonchalant Bandit Team</h2>
                        </div>
                        <div className="team_box ">
                            <div className="team_box_left "  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5">
                                <div className="team_box_item">
                                    <div className="team_member ">
                                        <div className="team_member_img">
                                            <img src="../assets/img/team/2.png" alt="" />
                                            <p>DML</p>
                                        </div>
                                    </div>
                                    <div className="team_box_title">
                                        <p>Creator, artist, golf enthusiast</p>
                                        
                                    </div>
                                    <div className="team_box_left_disc">
                                        <p>
                                          DML has been involved in the golf industry for the last 12 years. He knows what is involved in creating an awesome golf club but will incorporate holders and ambassadors ideas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="team_box_right " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="5">
                                <div className="team_box_item">
                                    <div className="team_member ">
                                        <div className="team_member_img">
                                            <img src="../assets/img/team/1.png" alt="" />
                                            <p>SKR</p>
                                        </div>
                                    </div>
                                    <div className="team_box_title">
                                        <p>Advisor, financer, golf enthusiast</p>
                                        
                                    </div>
                                    <div className="team_box_left_disc">
                                        <p>
                                         20 year career in investment management. SKR has founded many successful companies and is the director of a highly successful financial services firm.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* <===========team section end============> */}


      {/* <=======share holder section start========> */}
      <section>
            <div className="share_holder cpy-8"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="12">
                <div className="container">
                    <div className="share_wrapper">
                        <div className="share_title">
                            <h2>our partners</h2>
                        </div>
                    </div>
                    <div className="share_box">
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/7.svg" alt="" />
                               <div className="share_list_title">
                                <p>Piers Ward</p>
                               </div>
                            </div>
                            <p>Me & My Golf</p>
                           
                        </div>
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/6.svg" alt="" />
                               <div className="share_list_title">
                                <p>Andy Proudman </p>
                               </div>
                            </div>
                            <p>Me & My Golf</p>
                           
                        </div>
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/3.svg" alt="" />
                               <div className="share_list_title">
                                <p>Charley Hull</p>
                               </div>
                            </div>
                            <p>Multiple LPGA & LET Winner</p>
                           
                        </div>
                        
                        <div className="share_list">
                            <div className="share_item">
                              <img src="../assets/img/shareholder/2.svg" alt="" />
                               <div className="share_list_title">
                                <p>Ken Doherty</p>
                               </div>
                            </div>
                            <p>2007 World Snooker Champion</p>
                           
                        </div>
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/1.svg" alt="" />
                               <div className="share_list_title">
                                <p>Angus MacDonald</p>
                               </div>
                            </div>
                            <p>Professional Footballer </p>
                           
                        </div>
                        
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/10.svg" alt="" />
                               <div className="share_list_title">
                                <p>Matt Niedzwiecki</p>
                               </div>
                            </div>
                            <p>Me & My Golf</p>
                           
                        </div>
                       
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/5.svg" alt="" />
                               <div className="share_list_title">
                                <p>Alex Comben</p>
                               </div>
                            </div>
                            <p>CEO of Orka Golf</p>
                           
                        </div>
                        <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/8.svg" alt="" />
                               <div className="share_list_title">
                                <p>Ryan Evans </p>
                               </div>
                            </div>
                            <p>DP World Tour & Challenge Tour Golfer</p>
                           
                        </div>
                        <div className="share_list">
                            <div className="share_item">
                                {/* <div className="white">

                                </div> */}
                                <img src="../assets/img/shareholder/11.svg" alt="" />
                               <div className="share_list_title">
                                <p>Neil Dawson</p>
                               </div>
                            </div>
                            <p>Me & My Golf</p>
                           
                        </div>
                        <div className="share_list last">
                        
                            <div className="share_item">
                                <img src="../assets/img/shareholder/9.svg" alt="" />
                               <div className="share_list_title">
                                <p>Justin Jenk </p>
                               </div>
                            </div>
                            <p>INVESTOR</p>
                           
                       
                           
                        </div>
                       
                        
                       
                    </div>
                    <div className="shareholder_last">
                    <div className="share_list">
                            <div className="share_item">
                                <img src="../assets/img/shareholder/9.svg" alt="" />
                               <div className="share_list_title">
                                <p>Justin Jenk   </p>
                               </div>
                            </div>
                            <p>INVESTOR</p>
                           
                        </div>

                        </div>
                </div>
            </div>
        </section>
          {/* <=======share holder section end========> */}
       


    
    {/* <===========join section start============>*/}

    <section>
        <div className="join cpy-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5">
            <div className="container">
                <div className="join_wrapper">
                    <div className="join_box row">
                        <div className="join_left col-lg-8 col-md-12">
                            <div className="join_title">
                                <h2>join our discord community</h2>
                            </div>
                            <div className="join_disc">
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p> */}
                            </div>
                            <div className="join_btn">
                                <a  href="https://discord.com/invite/PXXTjYuNym" target="_blank" rel="noreferrer"><img src="../assets/img/discord.png" alt=""/>join discord</a>
                            </div>
                        </div>
                        <div className="join_right col-lg-4">
                            <div className="join_right_bg">
                                <img src="../assets/img/join.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <===========join section end============> */}
    {/* <===========FAQ section start============> */}
    <section>
        <div className="faq cpy-8" id="faq" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="5">
            {/* <div className="bottom_img">
                <img src="../assets/img/work_bg.png" alt="" />
            </div> */}
            <div className="container">
                <div className="faq_wrapper">
                    <div className="faq_title" >
                        <h2>frquently asked questions</h2>
                    </div>
                </div>
                <div className="faq_box row">
                    <div className="faq_left  col-lg-6 col-md-12" >
                       <div className="faq_bg">
                        <div className="faq_icon">
                                <img src="../assets/img/faq_icon.png" alt="" />     
                            </div>
                            {/* <div className="faq_img">
                              
                                    <div className="faq_img_left">
                                        <img src="../assets/img/faq.png" alt="" />
                                    </div>
                                    <div className="faq_img_right">
                                        <img src="../assets/img/faq2.png" alt="" />
                                    </div>
                               
                            </div> */}
                       </div>

                    </div>
                    <div className="faq_right col-lg-6 col-md-12" >
                        <div className="container">
                            <Faq
                                data={data}
                                styles={styles}
                                config={config}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* <===========FAQ section end============> */}
   
    

    </div>
</div>
  );
}

export default Home;
