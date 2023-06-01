const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="../assets/css/bootstrap.css">


<ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html">Home</a>
                        </li>
                        <li class="nav-item active">
                            <div class="dropdown">
                                  <a class="nav-link dropbtn" onclick="dropEV()">
                                    Events <i class="fa fa-caret-down"></i>
                                  </a>
                                  <div class="dropdown-content" id="evDropDown" aria-labelledby="dropdownMenu2">
                                    <a href="index.html" class="dropdown-item" type="button">All Events</a>
                                    <a href="myrsvp.html" class="dropdown-item" type="button">My RSVP</a>
                                    <a href="myevents.html" class="dropdown-item" type="button">My Events</a>
                                    <a href="budget.html" class="dropdown-item" type="button">Budgets</a>
                                    <a href="agenda.html" class="dropdown-item" type="button">Agenda</a>
                                    <a href="create.html" class="dropdown-item" type="button">Create Events</a>
                                  </div>
                                </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                  <a class="nav-link dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account <i class="fa fa-caret-down"></i>
                                  </a>
                                  <div class="dropdown-content" aria-labelledby="dropdownMenu2">
                                    <a href="../user/index.html" class="dropdown-item" type="button">Dashboard</a>
                                    <a href="../user/profile.html" class="dropdown-item" type="button">My Profile</a>
                                    <a id="logout-btn" class="dropdown-item" type="button">Logout</a>
                                  </div>
                                </div>
                        </li>
                    </ul>

                    <script>
                      function dropEV() {
                        document.getElementById("evDropDown").classList.toggle("show");
                      }

                      window.onclick = function(e) {
                        if (!e.target.matches('.')) {
                        var evDropDown = document.getElementById("evDropDown");
                          if (evDropDown.classList.contains('show')) {
                            evDropDown.classList.remove('show');
                          }
                        }
                      }
                      </script>
    `;



class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

