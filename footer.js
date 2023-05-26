
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

        <footer class="bt_footer">
            <div class="footer-29 pt-5">
                <div class="container py-lg-4">
                    <div class="row footer-top-29">
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-md-3 col-6 ftl">
                                    <ul>
                                        <h6 class="ft_title">Events</h6>
                                        <li><a href="#">Upcoming Events</a></li>
                                        <li><a href="#">Plan Events</a></li>
                                        <li><a href="#">Event Stats</a></li>
                                        <li><a href="#">All Events</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-6 ftl">
                                    <ul>
                                        <h6 class="ft_title">Quick Links</h6>
                                        <li><a href="user/login.html">Login</a></li>
                                        <li><a href="user/register.html">Register</a></li>
                                        <li><a href="#">Check In</a></li>
                                        <li><a href="events/index.html">RSVP</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-6 ftl mt-md-0 mt-4">
                                    <ul>
                                        <h6 class="ft_title">Company</h6>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Projects</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-3 col-6 ftl mt-md-0 mt-4">
                                    <h6 class="ft_title">Support</h6>
                                    <ul>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#">Faq's</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#"> Terms of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 footer-contact-list mt-lg-0 mt-md-5 mt-4">
                            <h6 class="ft_title">Social Media</h6>
                            <div class="social_ft">
                                <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
                                <a href="#" class="github"><i class="fab fa-github"></i></a>
                            </div>
                            <div class="subs">
                                <h6 class="ft_title-sm mt-4">Subscribe to our Newsletter</h6>
                                <form action="#" method="GET" class="subscribe-box ">
                                    <input type="search" placeholder="Enter Email" name="search" required="required"
                                         class="search-popup">
                                    <button type="submit" class="btn subs-btn"><i class="fa fa-paper-plane"
                                            aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-12"> 
                            <p class="copyright mt-4">&copy; 2023 <span>EVENA</span>. All rights reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    `;
  }
}

customElements.define('footer-component', Footer);
