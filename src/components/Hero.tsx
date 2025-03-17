
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Code, Layers } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-10 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-celestial/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-selective/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8 md:pr-10">
          <div className="inline-flex items-center px-4 py-2 bg-celestial/10 text-celestial rounded-full text-sm font-medium animate-on-scroll">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-celestial opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-celestial"></span>
            </span>
            New course sessions starting soon
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-on-scroll text-balance">
            Master <span className="text-celestial">Android Development</span> with React Native
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 animate-on-scroll max-w-xl text-balance">
            Join our comprehensive course designed by industry experts to build professional, cross-platform mobile applications for Android devices.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-on-scroll">
            <Button size="lg" className="bg-celestial hover:bg-celestial/90 text-white">
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-celestial text-celestial hover:bg-celestial/10">
              View Curriculum
            </Button>
          </div>
          
          <div className="pt-4 grid grid-cols-3 gap-4 animate-on-scroll">
            <div className="text-center">
              <div className="font-bold text-3xl text-resolution">16</div>
              <div className="text-sm text-foreground/70">Weeks</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-resolution">24</div>
              <div className="text-sm text-foreground/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-resolution">24/7</div>
              <div className="text-sm text-foreground/70">Support</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-on-scroll" ref={elementRef}>
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-selective/30 to-rust/30 rounded-2xl transform rotate-3"></div>
          <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-sm font-mono text-foreground/70">App.js</div>
            </div>
            
            <pre className="text-sm font-mono text-left overflow-x-auto p-4 bg-gray-50 rounded-lg">
              <code className="language-jsx text-resolution">
{`import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, <Text style={styles.highlight}>
          React Native!
        </Text>
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#1598F2',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1598F2',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  }
});

export default App;`}
              </code>
            </pre>
          </div>
          
          <div className="absolute -z-10 animate-float">
            <div className="absolute -bottom-6 -right-4 p-6 bg-white shadow-lg rounded-lg">
              <Code className="h-8 w-8 text-celestial" />
            </div>
            <div className="absolute top-20 -right-12 p-5 bg-white shadow-lg rounded-lg">
              <Smartphone className="h-7 w-7 text-ruddy" />
            </div>
            <div className="absolute -bottom-14 left-20 p-5 bg-white shadow-lg rounded-lg">
              <Layers className="h-7 w-7 text-resolution" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
