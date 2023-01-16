import React from 'react';
import "./footer.scss";

export default function Footer() {
    return (
        <footer className='footer'>
            <div>         
                <ul className="footer_list">
                    <li><a href="https://www.instagram.com/joacolopezx/" target="_blank"><i className="fa-brands fa-instagram fa-2xl"></i>Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/joaqu%C3%ADn-lopez-b27154168/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"></i>LinkedIn</a></li>
                    <li><a href="https://api.whatsapp.com/send/?phone=%2B5401164071623&text&app_absent=0" target="_blank"><i className="fa-brands fa-whatsapp fa-2xl"></i>WhatsApp</a></li>
                </ul>
            </div>
            <p>Copyright© 2023 Joaquin López. Página con fines comerciales.</p>
        </footer>
    )
}
