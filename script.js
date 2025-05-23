/* Global Styles */
:root {
    --primary-color: #bd9f18;
    --secondary-color: #aedf29;
    --accent-color: #3d3a0f;
    --text-color: #333;
    --light-text: #eeb414;
    --light-bg: #f9f9f9;
    --dark-bg: #222;
    --border-color: #eee;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

section {
    padding: 80px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: var(--primary-color);
}

.section-header p {
    color: var(--light-text);
    font-size: 1.1rem;
}

.btn-primary {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 12px 25px;
    border-radius: 30px;
    font-weight: 500;
    transition: var(--transition);
    border: none;
    cursor: pointer;
}

.btn-primary:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
}

.btn-secondary {
    display: inline-block;
    background: rgb(4, 88, 94);
    color: var(--primary-color);
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 500;
    transition: var(--transition);
    border: 1px solid var(--primary-color);
    cursor: pointer;
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: rgb(42, 153, 144);
}

/* Header & Navigation */
#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(26, 178, 189, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: var(--transition);
}

#header.scrolled {
    padding: 10px 0;
    background: rgb(4, 183, 214);
}

#header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

.logo h1 {
    font-size: 1.8rem;
    font-weight: 700;
}

.logo span {
    color: var(--primary-color);
}

nav {
    display: flex;
    align-items: center;
}

.nav-links {
    display: flex;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: var(--text-color);
    transition: var(--transition);
}

/* Hero Section */
#hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgb(126, 100, 15);
    padding-top: 80px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    animation: fadeInDown 1s ease;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    animation: fadeInUp 1s ease;
}

.hero-content .btn-primary {
    animation: fadeInUp 1.2s ease;
}

/* About Section */
#about {
    background: var(--light-bg);
}

.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-image {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
}

.about-text {
    flex: 1;
}

.about-text h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--primary-color);
}

.about-text p {
    margin-bottom: 20px;
    color: var(--light-text);
}

.about-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    text-align: center;
}

.stat-item h4 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 5px;
}

.stat-item p {
    font-size: 0.9rem;
    margin-bottom: 0;
}

/* Products Section */
.product-categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 40px;
}

.category-btn {
    padding: 8px 20px;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
}

.category-btn:hover, .category-btn.active {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.product-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.product-card:hover {
    transform: translateY(-10px);
}

.product-image {
    height: 200px;
    position: relative;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.product-card:hover .product-image img {
    transform: scale(1.1);
}

.product-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--accent-color);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 500;
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.product-rating {
    color: #ffc107;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.product-rating span {
    color: var(--light-text);
    font-size: 0.9rem;
    margin-left: 5px;
}

.product-price {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.old-price {
    text-decoration: line-through;
    color: var(--light-text);
    font-size: 0.9rem;
    margin-right: 10px;
}

.products-cta {
    text-align: center;
    margin-top: 50px;
}

/* Testimonials Section */
#testimonials {
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    color: white;
}

#testimonials .section-header h2::after {
    background: white;
}

.testimonials-slider {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    gap: 30px;
    padding: 20px 0;
}

.testimonial-card {
    min-width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 30px;
    display: flex;
    gap: 30px;
    align-items: center;
}

.testimonial-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid white;
}

.testimonial-content {
    flex: 1;
}

.testimonial-rating {
    color: #ffc107;
    margin-bottom: 15px;
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 20px;
    font-size: 1.1rem;
}

.testimonial-author h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.testimonial-controls {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.testimonial-control-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
}

.testimonial-control-btn:hover {
    background: white;
    color: var(--primary-color);
}

/* Contact Section */
.contact-content {
    display: flex;
    gap: 50px;
}

.contact-info, .contact-form {
    flex: 1;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: 15px;
    margin-top: 5px;
}

.contact-item h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--light-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.social-link:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

/* FAQ Section */
#faq {
    background: var(--light-bg);
}

.accordion {
    max-width: 800px;
    margin: 0 auto;
}

.accordion-item {
    background: white;
    border-radius: 5px;
    margin-bottom: 15px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
}

.accordion-header {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border: none;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
}

.accordion-header:hover {
    color: var(--primary-color);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.accordion-content p {
    padding: 0 20px 20px;
    color: var(--light-text);
}

.accordion-item.active .accordion-header {
    color: var(--primary-color);
}

.accordion-item.active .accordion-content {
    max-height: 200px;
}

.accordion-item.active .fa-plus {
    transform: rotate(45deg);
}

/* Footer */
#footer {
    background: var(--dark-bg);
    color: white;
    padding: 70px 0 20px;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 50px;
}

.footer-logo {
    flex: 1;
    min-width: 300px;
}

.footer-logo h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
}

.footer-logo span {
    color: var(--primary-color);
}

.footer-logo p {
    color: #aaa;
    margin-bottom: 20px;
}

.footer-social {
    display: flex;
    gap: 15px;
}

.footer-social a {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.footer-social a:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
}

.footer-links {
    display: flex;
    flex: 2;
    flex-wrap: wrap;
    gap: 30px;
}

.footer-links-column {
    flex: 1;
    min-width: 150px;
}

.footer-links-column h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-links-column h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--primary-color);
}

.footer-links-column ul li {
    margin-bottom: 10px;
}

.footer-links-column ul li a {
    color: #aaa;
    transition: var(--transition);
}

.footer-links-column ul li a:hover {
    color: white;
    padding-left: 5px;
}

.footer-newsletter {
    flex: 1;
    min-width: 300px;
}

.footer-newsletter h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-newsletter h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--primary-color);
}

.footer-newsletter p {
    color: #aaa;
    margin-bottom: 20px;
}

.footer-newsletter form {
    display: flex;
    margin-bottom: 20px;
}

.footer-newsletter input {
    flex: 1;
    padding: 12px 15px;
    border: none;
    border-radius: 30px 0 0 30px;
    font-family: inherit;
}

.footer-newsletter button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 0 30px 30px 0;
    cursor: pointer;
    transition: var(--transition);
}

.footer-newsletter button:hover {
    background: var(--secondary-color);
}

.payment-methods h4 {
    font-size: 1rem;
    margin-bottom: 15px;
    color: #aaa;
}

.payment-icons {
    display: flex;
    gap: 10px;
}

.payment-icons img {
    height: 30px;
    background: white;
    padding: 5px;
    border-radius: 5px;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #444;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-bottom p {
    color: #aaa;
}

.footer-bottom-links {
    display: flex;
    gap: 20px;
}

.footer-bottom-links a {
    color: #aaa;
    transition: var(--transition);
}

.footer-bottom-links a:hover {
    color: white;
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
}

.back-to-top.active {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: var(--secondary-color);
    transform: translateY(-5px);
}

/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Styles */
@media (max-width: 992px) {
    .section-header h2 {
        font-size: 2rem;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .about-image, .about-text {
        flex: none;
        width: 100%;
    }
    
    .contact-content {
        flex-direction: column;
    }
    
    .contact-info, .contact-form {
        flex: none;
        width: 100%;
    }
    
    .testimonial-card {
        flex-direction: column;
        text-align: center;
    }
    
    .testimonial-image {
        margin: 0 auto 20px;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: block;
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        transition: var(--transition);
        z-index: 999;
    }
    
    .nav-links.active {
        left: 0;
    }
    
    .nav-links li {
        margin: 0;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .footer-content {
        flex-direction: column;
        gap: 30px;
    }
    
    .footer-logo, .footer-links, .footer-newsletter {
        flex: none;
        width: 100%;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 576px) {
    section {
        padding: 60px 0;
    }
    
    .section-header h2 {
        font-size: 1.8rem;
    }
    
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .hero-content p {
        font-size: 1rem;
    }
    
    .about-stats {
        flex-wrap: wrap;
    }
    
    .stat-item {
        flex: 0 0 50%;
        margin-bottom: 20px;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-links {
        flex-direction: column;
    }
    
    .footer-links-column {
        width: 100%;
    }
}
