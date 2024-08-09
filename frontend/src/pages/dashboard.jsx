import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

function navigateToSend() {

}
export const Dashboard = () => {
    const navigate = useNavigate();
    function navigateToSend() {
        console.log("HAi");
        navigate('/send');
    }
  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-start justify-center pt-16">
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Your Balance <span className="font-normal">$5000</span></h2>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Users</h3>
        <Input className="mb-4" placeholder="Search users..." />
        <div className="space-y-4">
          {/* Repeat this structure for each user */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="font-medium">U1</span>
              <span>User 1</span>
            </div>
            <Button onClick={navigateToSend} variant="secondary">Send Money</Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}