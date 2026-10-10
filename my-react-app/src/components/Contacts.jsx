export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h2>CONTACTS</h2>
      <div className="contact-container">
        <div className="message-container">
          <p>
            If you have any questions or concerns, please don't hesitate to contact me.
          </p>
          <p>
            I am open to learning and grabbing opportunities that will help me grow and become better in the future.
          </p>
          <form action="https://formsubmit.co/chrisn.rojo@gmail.com" method="POST">
            <div>
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Message:</label>
              <textarea name="message" rows="4" required />
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div className="info-container">
            <div className="contact-info">
          <ul>
            <li><p>Christina N. Rojo</p></li>
            <li><p>+63 9649416316</p></li>
            <li><p>Iloilo City, Philippines</p></li>
            <li><a href="https://mail.google.com/mail/u/0/?hl=en#inbox">Gmail.com</a> <br/></li>
            <li><a href="https://www.facebook.com/profile.php?id=61585731012044">Facebook.com</a> <br/></li>
            <li><a href="https://www.linkedin.com/in/christina-rojo-b75421372/">Linkedin.com</a></li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}