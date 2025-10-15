import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Home, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const onboardingSteps = [
  {
    title: "Welcome to PopX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    primaryButton: "Create Account",
    secondaryButton: "Already Registered? Login",
    type: "default" as const,
  },
  {
    title: "Signin to your PopX account",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "login" as const,
  },
  {
    title: "Create your PopX account",
    type: "signup" as const,
  },
  {
    title: "Account Settings",
    type: "profile" as const,
  },
];

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAgency, setIsAgency] = useState("yes");
  const { toast } = useToast();

  const goToNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCreateAccount = () => {
    toast({
      title: "Account created successfully!",
      description: "Welcome to PopX. Your account has been created.",
    });
    goToNext();
  };

  const handleLogin = () => {
    toast({
      title: "Login successful!",
      description: "Welcome back to PopX.",
    });
    goToNext();
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToHome = () => {
    setCurrentStep(0);
  };

  const currentContent = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md space-y-8 animate-in fade-in duration-500">
        <Card className="p-8 space-y-6 bg-card shadow-lg border-border/50">
          {currentContent.type === "login" ? (
            <>
              <div className="space-y-2 text-left">
                <h1 className="text-2xl font-bold text-foreground">
                  {currentContent.title}
                </h1>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary text-sm font-medium">
                    Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter email address"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-primary text-sm font-medium">
                    Password
                  </Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter password"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <Button 
                  className="w-full h-12 text-base font-medium rounded-xl bg-muted hover:bg-muted/80 text-foreground shadow-sm mt-4"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </>
          ) : currentContent.type === "signup" ? (
            <>
              <div className="space-y-2 text-left mb-4">
                <h1 className="text-2xl font-bold text-foreground">
                  {currentContent.title}
                </h1>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-primary text-sm font-medium">
                    Full Name*
                  </Label>
                  <Input 
                    id="fullname" 
                    type="text" 
                    placeholder="Ex: Alice"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary text-sm font-medium">
                    Phone number*
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Ex: 8888888888"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-primary text-sm font-medium">
                    Email address*
                  </Label>
                  <Input 
                    id="signup-email" 
                    type="email" 
                    placeholder="Ex: email@gmail.com"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-primary text-sm font-medium">
                    Password *
                  </Label>
                  <Input 
                    id="signup-password" 
                    type="password" 
                    placeholder="Ex: #password@112"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-primary text-sm font-medium">
                    Company name
                  </Label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Ex: EduCase"
                    className="h-12 rounded-lg border-muted-foreground/20"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground text-sm font-medium">
                    Are you an Agency?*
                  </Label>
                  <RadioGroup value={isAgency} onValueChange={setIsAgency} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  className="w-full h-12 text-base font-medium rounded-xl shadow-sm hover:shadow-md transition-all mt-2"
                  onClick={handleCreateAccount}
                >
                  Create Account
                </Button>
              </div>
            </>
          ) : currentContent.type === "profile" ? (
            <>
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-foreground">
                  {currentContent.title}
                </h1>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16 bg-muted">
                      <AvatarFallback className="bg-muted text-foreground text-2xl">
                        M
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5">
                      <Camera className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      Ehthasham Mustafa
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      ehthasham678@gmail.com
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-semibold text-foreground">
                    About Me
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I am a passionate and motivated Full Stack  developer with a strong interest in building modern, responsive applications. I enjoy solving challenging problems, learning new technologies, and applying them to create efficient and user-friendly solutions. I am eager to contribute, grow, and make a meaningful impact through hands-on projects and real-world experience.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold text-foreground transition-all duration-300">
                  {currentContent.title}
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Button 
                  className="w-full h-12 text-base font-medium rounded-xl shadow-sm hover:shadow-md transition-all"
                  onClick={goToNext}
                >
                  {currentContent.primaryButton}
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full h-12 text-base font-medium rounded-xl"
                  onClick={goToNext}
                >
                  {currentContent.secondaryButton}
                </Button>
              </div>
            </>
          )}
        </Card>

        <Card className="p-4 shadow-md border-border/50">
          <div className="flex items-center justify-between">
            <button
              onClick={goToHome}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5 text-foreground" />
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                disabled={currentStep === 0}
                className="p-2 rounded-lg hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              <span className="text-sm font-medium text-foreground min-w-[4rem] text-center">
                {currentStep + 1} of {onboardingSteps.length}
              </span>

              <button
                onClick={goToNext}
                disabled={currentStep === onboardingSteps.length - 1}
                className="p-2 rounded-lg hover:bg-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
