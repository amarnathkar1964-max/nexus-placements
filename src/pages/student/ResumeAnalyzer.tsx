import StudentLayout from "@/components/layouts/StudentLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Star,
  Target,
  Sparkles,
  Download,
  RefreshCw,
  Building2
} from "lucide-react";
import { useState } from "react";

const resumeAnalysis = {
  overallScore: 85,
  atsScore: 78,
  sections: [
    { name: "Contact Information", score: 100, feedback: "Complete and well-formatted" },
    { name: "Education", score: 95, feedback: "Good academic details, consider adding coursework" },
    { name: "Skills", score: 70, feedback: "Add more technical skills relevant to your target roles" },
    { name: "Experience", score: 85, feedback: "Strong descriptions, quantify achievements more" },
    { name: "Projects", score: 90, feedback: "Well-documented projects with good technical depth" },
  ],
  suggestions: [
    "Add 2-3 more technical skills like React, Node.js",
    "Include metrics in your project descriptions (e.g., 'Improved performance by 40%')",
    "Add relevant certifications if any",
    "Consider adding a brief professional summary",
  ],
  keywords: {
    present: ["Python", "Machine Learning", "Data Analysis", "SQL", "Git"],
    missing: ["Cloud Services", "CI/CD", "Agile", "Docker", "REST APIs"],
  },
  companyMatch: [
    { name: "TCS", match: 88 },
    { name: "Infosys", match: 85 },
    { name: "Wipro", match: 82 },
    { name: "Cognizant", match: 79 },
  ]
};

const ResumeAnalyzer = () => {
  const [hasResume, setHasResume] = useState(true); // Simulating uploaded state

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display">AI Resume Analyzer</h1>
            <p className="text-muted-foreground mt-1">
              Get instant AI feedback on your resume quality and ATS compatibility
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button variant="hero">
              <RefreshCw className="w-4 h-4 mr-2" />
              Re-analyze
            </Button>
          </div>
        </div>

        {hasResume ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Scores */}
            <div className="space-y-6">
              {/* Overall Score */}
              <Card variant="gradient" className="border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <div className="w-28 h-28 rounded-full bg-card flex items-center justify-center">
                      <div>
                        <p className="text-4xl font-bold font-display gradient-text">{resumeAnalysis.overallScore}</p>
                        <p className="text-xs text-muted-foreground">out of 100</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Overall Score</h3>
                  <p className="text-sm text-muted-foreground">Your resume is above average</p>
                </CardContent>
              </Card>

              {/* ATS Score */}
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    ATS Compatibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Score</span>
                    <span className="font-bold">{resumeAnalysis.atsScore}%</span>
                  </div>
                  <Progress value={resumeAnalysis.atsScore} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Your resume is likely to pass most ATS filters.
                  </p>
                </CardContent>
              </Card>

              {/* Company Match */}
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent" />
                    Company Match
                  </CardTitle>
                  <CardDescription>Based on your target companies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {resumeAnalysis.companyMatch.map((company) => (
                    <div key={company.name} className="flex items-center justify-between">
                      <span className="font-medium">{company.name}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={company.match} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground w-10">{company.match}%</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Section Analysis */}
            <div className="space-y-6">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Section Analysis</CardTitle>
                  <CardDescription>Detailed breakdown of each section</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resumeAnalysis.sections.map((section) => (
                    <div key={section.name} className="p-4 rounded-xl bg-secondary/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{section.name}</span>
                        <div className="flex items-center gap-2">
                          {section.score >= 90 ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : section.score >= 70 ? (
                            <Star className="w-5 h-5 text-yellow-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-destructive" />
                          )}
                          <span className="font-semibold">{section.score}%</span>
                        </div>
                      </div>
                      <Progress value={section.score} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">{section.feedback}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Suggestions & Keywords */}
            <div className="space-y-6">
              {/* AI Suggestions */}
              <Card variant="glass" className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    AI Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {resumeAnalysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-primary/10">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <p className="text-sm">{suggestion}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Keywords */}
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Keyword Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-green-400 mb-2">Present Keywords</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeAnalysis.keywords.present.map((keyword) => (
                        <span key={keyword} className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-destructive mb-2">Missing Keywords</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeAnalysis.keywords.missing.map((keyword) => (
                        <span key={keyword} className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upload New */}
              <Card variant="glass">
                <CardContent className="p-6">
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">Upload New Resume</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Upload State */
          <Card variant="glass" className="max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Drag and drop your resume here, or click to browse
                </p>
                <Button variant="hero">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </StudentLayout>
  );
};

export default ResumeAnalyzer;
