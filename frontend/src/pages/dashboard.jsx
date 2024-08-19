import { Card } from "@/components/ui/card"
import { DisplayBalance } from '../components/balance';
import { DisplayUsers } from '../components/users';

export const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-start justify-center pt-16">
    <Card className="w-full max-w-4xl mx-auto">
      <DisplayBalance/>
      <DisplayUsers/>
    </Card>
    </div>
  )
}