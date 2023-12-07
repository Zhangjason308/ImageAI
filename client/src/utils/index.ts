import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt: String): String {
    const randomIndex: number = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt: String = surpriseMePrompts[randomIndex]

    if (randomPrompt === prompt) {
        return getRandomPrompt(prompt)
    }
    return randomPrompt
}