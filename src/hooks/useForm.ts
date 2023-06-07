import { ReactElement, useState } from "react"
export function useForm(steps: ReactElement[]) {
    const [currentStepIndex, setStepIndex] = useState<number>(0)
  
    function next() {
      setStepIndex(i => {
        if (i >= steps.length - 1) return i
        return i + 1
      })
    }
  
    function back() {
      setStepIndex(i => {
        if (i <= 0) return i
        return i - 1
      })
    }
  
    function goTo(index: number) {
      setStepIndex(index)
    }
  
    return {
      currentStepIndex,
      step: steps[currentStepIndex],
      steps,
      isFirstStep: currentStepIndex === 0,
      isLastStep: currentStepIndex === steps.length - 1,
      goTo,
      next,
      back,
    }
  }