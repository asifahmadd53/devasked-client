import { FeaturedCommunity } from "@/components/dashboard/dashborad/FeaturesCommunity";
import { ContentLayout } from "@/components/layout/DashboardContent";
import { ProgressChart } from "@/components/dashboard/dashborad/ProgressChart";
import { QuickActions } from "@/components/dashboard/dashborad/QuickActions";
import { RecentActivity } from "@/components/dashboard/dashborad/RecentActivity";
import StatisticCard12 from "@/components/dashboard/dashborad/StatsCards";
import { TrendingQuestions } from "@/components/dashboard/dashborad/TrendingQuestions";
import { mockActivities, mockQuizProgress, mockTrendingQuestions } from "@/lib/mock-data";

export default function Dashboard() {
    return (
        <ContentLayout title="Dashboard">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-primary">Welcome back!</h1>
                    <p className="text-slate-500 mt-2">Here&apos;s your learning dashboard</p>
                </div>
            <StatisticCard12/>
            <div className="py-4">
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   
                    <div className="lg:col-span-2 space-y-8">
                      
                        <ProgressChart data={mockQuizProgress} />

                        <TrendingQuestions questions={mockTrendingQuestions} />
                    </div>

                   
                    <div className="space-y-8">
                       
                        <QuickActions />

                        <FeaturedCommunity />

                        <RecentActivity activities={mockActivities} />
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}