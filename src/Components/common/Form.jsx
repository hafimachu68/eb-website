import styles from "./css/form.css";

const Form = () => {
  return (
    <section className={styles.form}>
      <div className={styles.useCases}>
        <div className={styles.text} />
        <img
          className={styles.unionIcon}
          loading="lazy"
          alt=""
          src="/union.svg"
        />
        <div className={styles.dataProcessor}>
          <div className={styles.inputFilterChain}>
            <div className={styles.subHeading}>Sub Heading</div>
          </div>
          <div className={styles.conditionalRoutingTable}>
            <div className={styles.sequentialProcessingChain}>
              <div className={styles.parallelProcessingChain}>
                <div className={styles.useCaseButtons}>
                  <b className={styles.heading1}>Heading 1</b>
                </div>
                <div className={styles.useCaseButtons1}>
                  <div className={styles.heading11}>Heading 1</div>
                </div>
              </div>
            </div>
            <div className={styles.conditionalRoutingTree}>
              <h1 className={styles.mainHeading}>Main Heading</h1>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna liqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum 
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataProcessingNetwork}>
          <div className={styles.conditionalDataFlow}>
            <div className={styles.heading1Wrapper}>
              <div className={styles.heading12}>Heading 1</div>
            </div>
            <div className={styles.heading1Container}>
              <div className={styles.heading13}>Heading 1</div>
            </div>
          </div>
          <div className={styles.exploreButtonWrapper}>
            <div className={styles.exploreButton}>
              <div className={styles.explore}>Explore</div>
            </div>
          </div>
          <div className={styles.dataProcessingNetworkInner}>
            <div className={styles.frameChild} />
          </div>
         </div>
      </div>
   </section>
  );
};

export default Form;
