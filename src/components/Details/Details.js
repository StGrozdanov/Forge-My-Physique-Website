import './Details.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Details() {
    return (
        <article className="features-article">
            <h2>Forge my physique</h2>
            <AnimationOnScroll animateIn='slideFadeInUp' delay={40} animateOnce={true}>
                <p>
                    Your training exercises, your nutrition, your measurements, your progress pictures, all in one
                    application.
                </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='slideFadeInUp' delay={200} animateOnce={true}>
                <p>
                    Get tips for your training, compare your sessions to your previous performances. It's you against you.
                    Feeling competitive? We won't stop you from comparing your sessions to your peers' sessions either !
                </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='slideFadeInUp' delay={300} animateOnce={true}>
                <p>
                    You want to cut, maintain or gain weight? We will handle that for you. Calculating your calories is 
                    easy work. Providing your gender and base physique stats is all we need. You will gain access to 
                    weight management charts, by recording your weight you let us adjust both your caloric and 
                    macronutrient intake, depending on your personal results and goals. You also gain access to 
                    calculation methods for your body fat percentage and weekly intake nutrition tables, that will give 
                    you the freedom to be flexible in your food picking choices.
                </p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn='slideFadeInUp' delay={40} animateOnce={true}>
                <p>
                    Training for some time but not sure if you really have progress on your physique? Our training
                    effectiveness algorithms will have you covered. You can track your muscle load progress after every
                    strength training session, we also track your measurement progress up to the last circumference mm.
                    Our ranking system will keep you on track - providing you with PERSONAL physique measurement goals at
                    any stage of your training journey, depending on your height and gender.
                </p>
            </AnimationOnScroll>
        </article>
    );
}