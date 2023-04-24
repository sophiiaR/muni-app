import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const steps = [
  { name: 'CARGA DE INFORMACION INICIAL', description: 'Plano de construcción y declaración jurada', href: '#', status: 'complete', letter: 'A'},
  {
    name: 'CERTIFICADO DE APORTE',
    description: 'Comprobante de pago y fecha de pago',
    href: '#',
    status: 'current',
    letter: 'B'    
  },
  { name: 'COMPROBANTE DE PAGO', description: 'Pago del permiso y fecha de pago', href: '#', status: 'upcoming', letter: 'C'},
  { name: 'PERMISO DE EDIFICACION', description: 'Expediente aprobado', href: '#', status: 'upcoming', letter: 'D'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Steps() {

  const [currentStep, setCurrentStep] = useState(steps.find((step) => step.status === 'current'))
  const [selectedStep, setSelectedStep] = useState(null);


  const handleStepClick = (clickedStep) => {
  setSelectedStep(clickedStep);
  const clickedStepIndex = steps.findIndex((step) => step.name === clickedStep.name)
  
    if (clickedStep.status === 'complete') {
      // do nothing
      return
    } else if (clickedStep.status === 'current') {
      clickedStep.status = 'complete'

      if (clickedStepIndex < steps.length - 1) {
        const nextStep = steps[clickedStepIndex + 1]
        nextStep.status = 'current'
        setCurrentStep(nextStep)
      } else {
        // last step, update status to complete
        setCurrentStep(clickedStep)
      }
    } else {
      // upcoming step
      // do nothing
      return
    }
  }


  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="group relative flex items-start" onClick={() => handleStepClick(step)}>
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="group relative flex items-start" aria-current="step" onClick={() => handleStepClick(step)}>
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
      {selectedStep && <p>{selectedStep.letter}</p>}
    </nav>
  )
}
