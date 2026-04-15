export function LocationMap() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-[#1F1F1F] font-heading tracking-tight">Location Map</h2>
              <div className="w-20 h-1.5 bg-[#A11D1D]" />
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Route to our centre is too easy to follow and reach the destination. We have incorporated Google Location Map to make it more understandable for you.
              </p>
              <p>
                From the small box on lower-left corner of the map, you can select to view street map or the satellite imagery. You can also view larger map to be more certain about our location.
              </p>
              <p className="font-bold text-[#A11D1D]">
                This visual representation will help you with the driving directions to arrive at The Exam Preparation & Testing House FZCO at Dubai Silicon Oasis.
              </p>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3787723223!2d55.384274999999995!3d25.11196800848383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzQzLjEiTiA1NcKwMjMnMDMuNCJF!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="TEPTH Dubai Silicon Oasis Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
