import React from 'react';
      import '../../assets/styles/Hero.css'      
                const HeroSection = () => {
                  return (
                    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://placehold.co/1920x1080")' }}>
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                        <h2 className="text-white text-sm uppercase tracking-widest mb-2">The Best Way To</h2>
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Home</h1>
                        <div className="bg-card p-4 rounded-lg shadow-lg w-full max-w-4xl">
                          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                            <select className="bg-input text-foreground p-3 rounded-md w-full md:w-auto">
                              <option>Apartments</option>
                              <option>Houses</option>
                              <option>Condos</option>
                            </select>
                            <input type="text" placeholder="Search" className="bg-input text-foreground p-3 rounded-md w-full md:flex-1" />
                            <button className="bg-primary text-primary-foreground p-3 rounded-md w-full md:w-auto">Search</button>
                            <button className="text-muted-foreground">Advanced search <span className="ml-1">&#9660;</span></button>
                          </div>
                          <div className="flex space-x-4 mt-4 justify-center">
                            <button className="bg-secondary text-secondary-foreground p-2 rounded-md">Buy</button>
                            <button className="bg-secondary text-secondary-foreground p-2 rounded-md">Rent</button>
                            <button className="bg-secondary text-secondary-foreground p-2 rounded-md">Sold</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                };
                
                export default HeroSection;