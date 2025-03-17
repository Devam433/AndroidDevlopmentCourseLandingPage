
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  CheckCircle, 
  BookOpen, 
  Code, 
  Layers, 
  Database, 
  Smartphone, 
  Zap
} from "lucide-react";
import { useEffect } from "react";

const modules = [
  {
    id: "fundamentals",
    title: "React Native Fundamentals",
    icon: <BookOpen className="h-5 w-5" />,
    weeks: "Weeks 1-3",
    description: "Build a strong foundation with core React Native concepts",
    topics: [
      "JavaScript & React Fundamentals",
      "Setting up React Native Environment",
      "Components & JSX",
      "Props & State Management",
      "Styling with Flexbox & StyleSheet",
      "Handling User Input & Events"
    ]
  },
  {
    id: "ui",
    title: "UI Development",
    icon: <Layers className="h-5 w-5" />,
    weeks: "Weeks 4-6",
    description: "Create beautiful and responsive mobile interfaces",
    topics: [
      "Core & Custom Components",
      "Navigation & Routing",
      "Animations & Transitions",
      "Responsive Layouts",
      "UI Libraries (React Native Paper, UI Kitten)",
      "Custom Theming & Styling",
      "Testing UI Components"
    ]
  },
  {
    id: "native",
    title: "Native Features",
    icon: <Smartphone className="h-5 w-5" />,
    weeks: "Weeks 7-9",
    description: "Integrate device hardware and native capabilities",
    topics: [
      "Camera & Image Picker",
      "Geolocation & Maps",
      "Push Notifications",
      "Local Storage & AsyncStorage",
      "Device Sensors & Hardware",
      "Native Modules & Bridges",
      "Background Services"
    ]
  },
  {
    id: "backend",
    title: "Backend Integration",
    icon: <Database className="h-5 w-5" />,
    weeks: "Weeks 10-12",
    description: "Connect your app to backend services and APIs",
    topics: [
      "RESTful API Integration",
      "GraphQL with Apollo Client",
      "Firebase & Firestore",
      "Authentication & Authorization",
      "File Uploads & Storage",
      "Real-time Data with WebSockets",
      "Offline Support & Data Syncing"
    ]
  },
];

const Curriculum = () => {
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
    <section id="curriculum" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-celestial/10 text-celestial rounded-full text-sm font-medium animate-on-scroll">
            <BookOpen className="mr-2 h-4 w-4" />
            16-Week Program
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
            A <span className="text-celestial">Structured Path</span> to Android Development Mastery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Our curriculum is carefully designed to take you from beginner to professional through hands-on projects and real-world applications.
          </p>
        </div>

        <div className="animate-on-scroll">
          <Tabs defaultValue="fundamentals" className="w-full">
          <TabsList className="w-full overflow-y-auto h-16 max-w-3xl mx-auto flex flex-wrap justify-center gap-4 mb-8">
              {modules.map((module) => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id}
                  className="flex items-center justify-center data-[state=active]:text-celestial data-[state=active]:border-b-2 data-[state=active]:border-celestial py-3"
                >
                  <span className="hidden md:flex mr-2">{module.icon}</span>
                  <span className="text-sm md:text-base">{module.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id} className="mt-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-resolution to-celestial p-6 text-white">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-display font-semibold flex items-center">
                        {module.icon}
                        <span className="ml-2">{module.title}</span>
                      </h3>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {module.weeks}
                      </span>
                    </div>
                    <p className="mt-2 opacity-90">{module.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-medium mb-4">What You'll Learn:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {module.topics.map((topic, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-celestial mr-2 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h4 className="text-lg font-medium mb-4">Module Projects:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-resolution">Individual Project</div>
                          <p className="text-sm text-foreground/70 mt-1">
                            Build a functional app component using module concepts
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-resolution">Team Assignment</div>
                          <p className="text-sm text-foreground/70 mt-1">
                            Collaborate on a mini-app with integrated features
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
