import './Features.css';

export default function Features() {
    return (
        <article className="features-article">
            <h2>Forge my physique</h2>
            <p className='slideFadeInUp' style={{animationDelay: '0.5s'}}>
                Your training exercises, your nutrition, your measurements, your progress pictures, all in one
                application.
            </p>
            <p className='slideFadeInUp' style={{animationDelay: '1s'}}>
                Get tips for your training, compare your training sessions against your previous performances.
                It's you against you. Feeling competitive? We won't stop you from comparing your sessions against
                your pears as well.
            </p>
            <p className='slideFadeInUp' style={{animationDelay: '1.5s'}}> 
                You want to cut, maintain or gain weight? We will handle that for you. Calculating your calories is
                easy work. Providing your gender and base physique stats is all we need. You will gain access to
                weight management charts, recording your weight will help us to adjust your calorie and macro intakes
                depending on your personal results. You also gain access to calculation methods for your bodyfat
                percentage and weekly intake nutrition tables, that will give you the freedom to be flexible in your
                food picking choices.
            </p>
            <p className='slideFadeInUp' style={{animationDelay: '2s'}}>
                Training for some time but not sure if you really have progress on your physique? Our training
                effectiveness algoritms will have you covered. You can track your muscle load progress after every
                strength training session, we also track your measurement progress up to the last circumference mm.
                Our ranking system will keep you on track - providing you with PERSONAL physique measurement goals at
                any stage of your training journey, depending on your height and gender.
            </p>
        </article>
    );
}