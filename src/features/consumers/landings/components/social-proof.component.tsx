import { FC } from 'react';


const SocialProofComponent: FC = () => {
  return (
    <>
      <section className="w-full bg-white pb-16 pt-2 px-4">
        <div className="container mx-auto max-w-lg">
          <div className="relative w-full rounded-sm overflow-hidden shadow-xl" style={{ aspectRatio: '9/10' }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/videos/socials-poster.jpg"
            >
              <source src="/videos/socials.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

   

     
    </>
  );
};

export default SocialProofComponent; 