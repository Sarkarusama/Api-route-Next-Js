import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const PostCard = ({body,title}:{body:string,title:string}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
            {title}
        </CardTitle>
        <CardContent>
            <CardDescription>
                {body}
            </CardDescription>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default PostCard
