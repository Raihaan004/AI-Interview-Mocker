"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({params}) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    setFeedbackList(result);
    
    if (result.length > 0) {
      const totalRating = result.reduce((sum, item) => sum + (item.rating || 0), 0);
      const averageRating = Math.round((totalRating / result.length) * 10) / 10;
      setOverallRating(averageRating);
    }
  }

  const getFeedbackMessage = () => {
    if (overallRating >= 8) {
      return {
        title: "Excellent Work! 🎉",
        message: "You've performed exceptionally well in this interview. Keep up the great work!",
        color: "text-green-500"
      };
    } else if (overallRating >= 6) {
      return {
        title: "Good Job! 👍",
        message: "You did well, but there's still room for improvement in some areas.",
        color: "text-blue-500"
      };
    } else if (overallRating >= 4) {
      return {
        title: "Needs Improvement 💪",
        message: "You have some solid foundations but need more practice to improve your performance.",
        color: "text-yellow-500"
      };
    } else {
      return {
        title: "Keep Practicing! 📚",
        message: "You need to practice more. Review the feedback carefully and focus on your weak areas.",
        color: "text-red-500"
      };
    }
  };

  const feedbackMessage = getFeedbackMessage();

  return (
    <div className='p-10'>
      {feedbackList?.length === 0 ? (
        <h2 className='font-bold text-xl my-3'>No Interview Feedback Record Found</h2>
      ) : (
        <>
          <h2 className={`text-3xl font-bold ${feedbackMessage.color}`}>
            {feedbackMessage.title}
          </h2>
          <h2 className='font-bold text-2xl'>Here is your interview feedback</h2> 
          <h2 className='text-primary text-lg my-3'>
            Your overall interview rating: <strong>{overallRating}/10</strong>
          </h2>
          <p className='text-gray-700 mb-4'>{feedbackMessage.message}</p>

          <h2 className='text-sm text-gray-500 mb-6'>
            Find below interview questions with correct answers, your answers, and feedback for improvement
          </h2>
          
          {feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-7'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full'>
                {item.question} <ChevronsUpDown className='h-5 w-5'/>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-red-500 p-2 border rounded-lg'>
                    <strong>Rating: </strong>{item.rating}/10
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'>
                    <strong>Your Answer: </strong>{item.userAns}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'>
                    <strong>Correct Answer: </strong>{item.correctAns}
                  </h2>
                  <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'>
                    <strong>Feedback: </strong>{item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <Button onClick={() => router.replace('/dashboard')} className='mt-6'>
        Go Home
      </Button>
    </div>
  )
}

export default Feedback