'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'
import languages from './languages'
import { RICK_ROLL_URL } from './constants'
import { useLocationAndLanguage } from './hooks/useLocationAndLanguage'

export default function CodeLogin() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { isLoading, location, currentDate, languageKey, handleLanguageChange } = useLocationAndLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/validate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      const data = await response.json()

      if (data.valid && data.url) {
        router.push(data.url)
      } else {
        setError(languages[languageKey].invalidCode)
      }
    } catch (err) {
      setError(languages[languageKey].invalidCode)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">{languages[languageKey].loading}</div>
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-700/30 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-700/30 blur-[100px]" />
      
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-fuchsia-600 hover:text-white transition-colors">
              <Globe className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Change language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(languages).map(([key, lang]) => (
              <DropdownMenuItem key={key} onSelect={() => handleLanguageChange(key)}>
                {lang.languageName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="container mx-auto min-h-screen flex items-center justify-between p-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{languages[languageKey].title}</h1>
          <p className="text-xl">{location}</p>
          <p className="text-xl">{currentDate}</p>
          <Link 
            href={RICK_ROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white px-6 py-2 hover:bg-white/10 transition-colors w-fit"
          >
            {languages[languageKey].testLuck}
          </Link>
        </div>

        {/* Right Section */}
        <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg w-full max-w-md border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{languages[languageKey].subtitle}</h2>
              <p className="text-zinc-400">{languages[languageKey].description}</p>
            </div>

            <Input
              type="text"
              placeholder={languages[languageKey].description}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400"
            />

            <Button 
              type="submit" 
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? languages[languageKey].loading : languages[languageKey].button}
            </Button>

            {error && (
              <Alert variant="destructive" className="bg-red-900/50 border-red-900 text-red-300">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}