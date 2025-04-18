import { NextResponse } from 'next/server'
import { esgCategoriesService } from '@/services/esgCategoriesService'

export async function GET() {
  try {
    const categories = await esgCategoriesService.getCategories()
    return NextResponse.json({ categories })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch ESG categories' },
      { status: 500 }
    )
  }
} 