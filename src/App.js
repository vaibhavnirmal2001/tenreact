import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
    <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-between">

      <div class="logo">
        <h1><a href="index.html">TEN</a></h1>
        

        

      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">courses</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li class="dropdown"><a href="#"><span>More</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Articles 1</a></li>
              <li class="dropdown"><a href="#"><span>Courses</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Course 1</a></li>
                  <li><a href="#">Course 2</a></li>
                  <li><a href="#">Course 3</a></li>
                  <li><a href="#">Course 4</a></li>
                  <li><a href="#">Course 5</a></li>
                </ul>
              </li>
              <li><a href="#">Sub course 2</a></li>
              <li><a href="#">Sub course 3</a></li>
              <li><a href="#">Sub course 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>


    </div>
  </header>


 

  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container text-center text-md-left" data-aos="fade-up">
      <h1>Welcome to TEN</h1>
      <h2>A World of Knowledge at Your Fingertips..!</h2>
      
              <div class="text-center"><button  id="jointen" type="submit">Join TEN Virtual Campus</button></div>

      
    </div>
  </section>


  <main id="main">

   

    <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-xl-6 col-lg-7" data-aos="fade-right">
            <img src="assets/img/about-img.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-xl-6 col-lg-5 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">About Us</h3>
            <p data-aos="fade-up">
              A World of Knowledge at Your Fingertips
                </p>
            <div class="icon-box" data-aos="fade-up">
              <i class="bx bx-receipt"></i>
              <h4>Learning Together
From the Comfort
of Your Home</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-cube-alt"></i>
              <h4>Quality Teaching
Any Time, Everywhere</h4>
              <p>
About Us
Quality Teaching
Any Time, Everywhere

The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.
Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.
This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.</p>
            </div>

            {/*<div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                          <i class="bx bx-cube-alt"></i>
                          <h4>Ullamco laboris nisi</h4>
                          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>*/}

          </div>
        </div>

      </div>
    </section>


    

   {/* <section id="steps" class="steps section-bg">
         <div class="container">
   
           <div class="row no-gutters">
   
             <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in">
               <span>01</span>
               <h4>Lorem Ipsum</h4>
               <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
             </div>
   
             <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="100">
               <span>02</span>
               <h4>Repellat Nihil</h4>
               <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
             </div>
   
             <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="200">
               <span>03</span>
               <h4> Ad ad velit qui</h4>
               <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
             </div>
   
             <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="300">
               <span>04</span>
               <h4>Repellendus molestiae</h4>
               <p>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
             </div>
   
             <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="400">
               <span>05</span>
               <h4>Sapiente Magnam</h4>
               <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
             </div>
   
             <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="500">
               <span>06</span>
               <h4>Facilis Impedit</h4>
               <p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
             </div>
   
           </div>
   
         </div>
       </section>
   
   
       
   
       <section id="features" class="features">
         <div class="container">
   
           <div class="row">
             <div class="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
               <ul class="nav nav-tabs flex-column">
                 <li class="nav-item">
                   <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                     <h4>Modi sit est</h4>
                     <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                   </a>
                 </li>
                 <li class="nav-item mt-2">
                   <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                     <h4>Unde praesentium sed</h4>
                     <p>Voluptas vel esse repudiandae quo excepturi.</p>
                   </a>
                 </li>
                 <li class="nav-item mt-2">
                   <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                     <h4>Pariatur explicabo vel</h4>
                     <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                   </a>
                 </li>
                 <li class="nav-item mt-2">
                   <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                     <h4>Nostrum qui quasi</h4>
                     <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                   </a>
                 </li>
               </ul>
             </div>
             <div class="col-lg-7 ml-auto" data-aos="fade-left">
               <div class="tab-content">
                 <div class="tab-pane active show" id="tab-1">
                   <figure>
                     <img src="assets/img/features-1.png" alt="" class="img-fluid"/>
                   </figure>
                 </div>
                 <div class="tab-pane" id="tab-2">
                   <figure>
                     <img src="assets/img/features-2.png" alt="" class="img-fluid"/>
                   </figure>
                 </div>
                 <div class="tab-pane" id="tab-3">
                   <figure>
                     <img src="assets/img/features-3.png" alt="" class="img-fluid"/>
                   </figure>
                 </div>
                 <div class="tab-pane" id="tab-4">
                   <figure>
                     <img src="assets/img/features-4.png" alt="" class="img-fluid"/>
                   </figure>
                 </div>
               </div>
             </div>
           </div>
   
         </div>
       </section>*/}


   

    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Our Courses
Your New
Journey Begins Here, Today</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Product Management like a pro</a></h4>
              <p class="description">This module is prepared with special emphasis given on both current and new product managers working digitally who want to apply for a portfolio of modern practices to develop their products and teams. It comprises of five sub-courses through which one can cover product design, hypothesis-driven development and agile, all at the heart of modern </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Digital Marketing</a></h4>
              <p class="description">This course summarizes the concept of Digital Marketing at expert level wherein the candidate would get an opportunity to learn to create how to market content using social media to amplify outgoing messages, making content discoverable in search, running advertisement campaigns and advertising on Facebook.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Entrepreneurship
made fun</a></h4>
              <p class="description">If you want to learn to think like an innovator, this is place for you! This quest teaches you how to think research, analyze, innovate and strategize. The content present in this course will help you visualize business ideas in a holistic way by putting together patterns of varying complexity into a single perspective for practice. This expert module covers the</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Network Building</a></h4>
              <p class="description">If you want to learn to think like an innovator, this is place for you! This quest teaches you how to think research, analyze, innovate and strategize. The content present in this course will help you visualize business ideas in a holistic way by putting together patterns of varying complexity into a single perspective for practice. This expert module covers the</p>
            </div>
          </div>

        </div>

      </div>
    </section>


   

    <section id="testimonials" class="testimonials">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!.</p>
        </div>

        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.<br/>

                                       Thank you team TEN!
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                
                <h3>Harsh Rajput</h3>
                <h4> General Management Intern</h4>
              </div>
            </div>


            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>


            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>


            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>


            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>


          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>



    <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Courses</h2>
          <p>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies</p>
        </div>

        

        <div class="row portfolio-container" data-aos="fade-up">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="#" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    

    <section id="team" class="team">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Alumni Team</p>
        </div>

        <div class="row">

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>Chief Executive Officer</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>Product Manager</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>CTO</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>Accountant</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <img src="assets/img/team/team-5.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>Chief Executive Officer</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <img src="assets/img/team/team-6.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>Product Manager</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/team-7.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>CTO</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <img src="assets/img/team/team-8.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Name</h4>
                  <span>Accountant</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    

    <section id="faq" class="faq section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">What is The Entrepreneurship Network (TEN) ? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise.
Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Why do I join TEN ? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                <p>
                 TEN would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
                </p>
              </div>
            </li>

            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">What is The Entrepreneurship Network (TEN) ? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise.
Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Why do I join TEN ? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                <p>
                 TEN would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
                </p>
              </div>
            </li>

            

          </ul>
        </div>

      </div>
    </section>


   

    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Contact</h2>
         
        </div>

        <div class="row no-gutters justify-content-center" data-aos="fade-up">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Delhi, India</p>
              </div>

              <div class="email mt-4">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>hr.contact.ten@gmail.com</p>
              </div>

              <div class="phone mt-4">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+918595986120</p>
              </div>

            </div>

          </div>

          <div class="col-lg-5 d-flex align-items-stretch">
           
          </div>

        </div>

        <div class="row mt-5 justify-content-center" data-aos="fade-up">
          <div class="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>


  </main>


  

  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>TEN</h3>
              <p>
                Delhi <br />
                India<br /><br />
                <strong>Phone:</strong> +918595986120<br />
                <strong>Email:</strong> hr.contact.ten@gmail.com<br />
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p></p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Vaibhav_.vn</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
       

        Designed by <a href="https://vaibhavnirmal2001.github.io/vaibhavnirmal.github.io/">Vaibhav._vn</a>
      </div>
    </div>
  </footer>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
  );
}

export default App;
