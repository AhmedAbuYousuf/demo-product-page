import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone, 
  Cloud 
} from "lucide-react";
import { useState } from "react";

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      shortDesc: "Optimized for speed",
      fullDesc: "Experience blazing-fast performance with our optimized infrastructure. Our platform processes data 10x faster than traditional solutions, ensuring your team never waits for results. Built with cutting-edge technology and cloud-native architecture for maximum efficiency."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      shortDesc: "Data-driven insights",
      fullDesc: "Get deep insights into your business with our advanced analytics dashboard. Track KPIs, monitor trends, and make data-driven decisions with customizable reports, real-time metrics, and predictive analytics powered by machine learning."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      shortDesc: "Work together seamlessly",
      fullDesc: "Enable seamless collaboration across your entire organization. Share projects, communicate in real-time, assign tasks, and track progress with our comprehensive team management tools. Perfect for remote and hybrid teams."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      shortDesc: "Bank-grade security",
      fullDesc: "Your data is protected with enterprise-grade security measures including end-to-end encryption, multi-factor authentication, role-based access control, and compliance with SOC 2, GDPR, and HIPAA standards."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      shortDesc: "Access anywhere",
      fullDesc: "Stay productive on the go with our fully responsive mobile application. Access all features, receive push notifications, and sync data seamlessly across all your devices. Native iOS and Android apps available."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      shortDesc: "Connect everything",
      fullDesc: "Integrate with over 100+ popular tools and services including Slack, Google Workspace, Microsoft 365, Salesforce, and more. Our robust API and webhook system allows for custom integrations and automated workflows."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline your workflow and boost productivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 hover:border-primary/50"
                onClick={() => setSelectedFeature(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-primary rounded-lg text-primary-foreground mx-auto w-fit mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Description Dialog */}
        <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
          <DialogContent className="max-w-2xl">
            {selectedFeature !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      {(() => {
                        const IconComponent = features[selectedFeature].icon;
                        return <IconComponent className="h-6 w-6" />;
                      })()}
                    </div>
                    <span className="text-2xl">{features[selectedFeature].title}</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="pt-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {features[selectedFeature].fullDesc}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeaturesSection;