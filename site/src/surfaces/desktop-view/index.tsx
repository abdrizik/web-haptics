import styles from "./styles.module.scss";

import { Footer } from "../../components/footer";
import MobileView from "../mobile-view";
import { QRCode } from "../../components/qrcode";
import { ScanText } from "./scan-text";
import { InstallCommands } from "../installation";
import { Usage } from "../usage";
import { useState } from "react";
import { motion } from "motion/react";

export default function DesktopView() {
  const [shaking, setShaking] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{
              scale: 0,
              rotate: 10,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 550,
              damping: 30,
              mass: 1.2,
              rotate: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
          >
            <div className={styles.phone} data-shaking={shaking}>
              <MobileView disabled setShaking={setShaking} />
            </div>
          </motion.div>
          <div className={styles.scan}>
            <ScanText />
            <motion.div
              initial={{
                scale: 0,
                rotate: -10,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 550,
                damping: 30,
                mass: 1.2,
                delay: 0.1,
                rotate: {
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.1,
                },
              }}
            >
              <div className={styles.qrcode}>
                <QRCode />
              </div>
            </motion.div>
          </div>
        </div>

        <section>
          <h3>Install</h3>
          <InstallCommands />
        </section>

        <section>
          <h3>Usage</h3>
          <Usage />
        </section>

        <Footer />
      </div>
    </div>
  );
}
