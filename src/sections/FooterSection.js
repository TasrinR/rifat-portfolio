import styles from "@/components/common/footer/Footer.module.css";
import Icons from "@/components/common/footer/icons/Icons";
import SocialMedia from "@/components/common/footer/social-media/SocialMedia";

const FooterSection = () => {
  return (
    <section className={styles["container"]} id="footer">
      <div className={styles["area"]}>
        <Icons />
        <div className={styles["content"]}>
          <h4 className={styles["heading"]}>Connect</h4>
          <div className={styles["personal-info-container"]}>
            <div className={styles["social-section"]}>
              <div className={styles["social-row"]}>
                <SocialMedia
                  mediaName="LinkedIn"
                  description="Trying To Build Up"
                  href="https://www.linkedin.com/in/rifat-sazzad/"
                />
                <SocialMedia
                  mediaName="Facebook"
                  description="Stranger Danger"
                  href="https://www.facebook.com/rifat.sazzad/"
                />
              </div>
              <div className={styles["social-row"]}>
                <SocialMedia
                  mediaName="WhatsApp"
                  description="100% Response rate"
                  href="https://wa.me/8801312236456"
                />
                <SocialMedia
                  mediaName="Dribbble"
                  description="I never post"
                  href="https://dribbble.com/rifat-sazzad"
                />
              </div>
            </div>
            <div className={styles["contact-section"]}>
              <div className={styles["contact-item"]}>
                <h6 className={styles["contact-name"]}>Email</h6>
                <a
                  href="mailto:rifat.sazzad101@gmail.com"
                  className={styles["contact-info"]}
                >
                  rifat.sazzad101@gmail.com
                </a>
              </div>
              <div className={styles["contact-item"]}>
                <h6 className={styles["contact-name"]}>Phone</h6>
                <p className={styles["contact-info"]}>+8801312236456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
