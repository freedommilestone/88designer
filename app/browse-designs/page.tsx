"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Search, Filter, X } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import MainLayout from "@/components/layout/MainLayout"

// Define types
interface Style {
  id: string;
  name: string;
  image: string;
  color: string;
}

interface Template {
  id: string;
  name: string;
  category: string;
  price: string;
  styles: Style[];
  isNew?: boolean;
  isFeatured?: boolean;
}

// Sample templates - these would typically come from an API
const templates: Template[] = [
  {
    id: "maya",
    name: "Maya",
    category: "Fashion",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "prestige",
    name: "Prestige",
    category: "Luxury",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "impulse",
    name: "Impulse",
    category: "Fitness",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "flow",
    name: "Flow",
    category: "Art",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "spark",
    name: "Spark",
    category: "Creative",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "brooklyn",
    name: "Brooklyn",
    category: "Restaurant",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "retro",
    name: "Retro",
    category: "Vintage",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "nova",
    name: "Nova",
    category: "Technology",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "horizon",
    name: "Horizon",
    category: "Outdoors",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "palo-alto",
    name: "Palo Alto",
    category: "Technology",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "minimal",
    name: "Minimal",
    category: "Simple",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  },
  {
    id: "venture",
    name: "Venture",
    category: "Business",
    price: "Free",
    styles: [
      { id: "default", name: "Default", image: "/placeholder.svg", color: "#000000" }
    ]
  }
];

const categories = ["All", "Fashion", "Luxury", "Fitness", "Art", "Creative", "Restaurant", "Vintage", "Technology", "Outdoors", "Business", "Simple"];

export default function BrowseDesignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStyles, setActiveStyles] = useState<Record<string, string>>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize active styles for each template
  useEffect(() => {
    const styles: Record<string, string> = {};
    templates.forEach(template => {
      styles[template.id] = template.styles[0].id;
    });
    setActiveStyles(styles);
  }, []);

  const handleStyleChange = (templateId: string, styleId: string, e: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveStyles(prev => ({
      ...prev,
      [templateId]: styleId
    }));
  };

  // Apply category filter
  const filteredTemplates = templates.filter(template => {
    // Category filter
    if (selectedCategory !== "All" && template.category !== selectedCategory) return false;
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        template.name.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  return (
    <MainLayout>
      <main className="bg-gray-50 min-h-screen">
        {/* Header with Search */}
        <div className="bg-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-xl font-bold text-gray-900">Browse all themes</h1>
              
              {/* Search Bar and Filter Toggle */}
              <div className="flex items-center gap-2 max-w-xs w-full">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search themes..."
                    className="pl-9 pr-4 h-9 rounded-md border-gray-300 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
            </div>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="md:hidden flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 bg-white"
                >
                  <Filter className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
                    </div>
                  </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mobile Filter Overlay */}
            <div className={`fixed inset-0 bg-black/30 z-40 md:hidden ${isFilterOpen ? 'block' : 'hidden'}`} onClick={() => setIsFilterOpen(false)}></div>

            {/* Filters Sidebar */}
            <div className={`${isFilterOpen ? 'fixed right-0 top-0 h-full z-50 w-64 shadow-xl' : 'hidden'} md:sticky md:top-32 md:block md:w-52 flex-shrink-0 bg-white p-4 overflow-auto transition-all duration-300`}>
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h2 className="font-medium">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
                    </div>

              <div className="mb-4">
                <h2 className="text-sm font-medium text-gray-900 mb-2">Industry</h2>
                <div className="space-y-1">
                  {categories.slice(1).map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        type="checkbox"
                        checked={selectedCategory === category}
                        onChange={() => {
                          setSelectedCategory(selectedCategory === category ? "All" : category);
                          if (window.innerWidth < 768) setIsFilterOpen(false);
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                        {category} <span className="text-gray-400">(3)</span>
                      </label>
                </div>
              ))}
            </div>
          </div>
            </div>

            {/* Templates Grid */}
            <div className="flex-1">
              {filteredTemplates.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center">
                  <p className="text-gray-500 mb-4">No themes match your search</p>
                  <Button variant="outline" onClick={() => setSelectedCategory("All")}>Clear filter</Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {filteredTemplates.map((template) => {
                    const activeStyle = template.styles[0];
                    
                    return (
                      <div key={template.id} className="group">
                        {/* Template Preview */}
                        <Link href={`/browse-designs/${template.id}`} className="block">
                          <div className="relative aspect-[3/4] mb-3 bg-white rounded-md overflow-hidden border border-gray-200">
                            <Image
                              src={activeStyle.image}
                              alt={`${template.name} template`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>

                        {/* Template Info */}
                        <div className="mb-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {template.name}
                            </h3>
                            <div className="text-sm font-medium text-gray-900">
                              {template.price}
                  </div>
                </div>
                          <p className="text-xs text-gray-500">{template.category}</p>
                        </div>
                  </div>
                    );
                  })}
                </div>
              )}
              
              {/* Pagination */}
              <div className="flex justify-center mt-10 pb-8">
                <nav className="inline-flex">
                  <ul className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(page => (
                      <li key={page}>
                        <a 
                          href="#" 
                          className={`inline-flex items-center justify-center w-8 h-8 text-sm ${
                            page === 1 ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'
                          } rounded-md`}
                        >
                          {page}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="inline-flex items-center justify-center px-3 h-8 text-sm text-gray-500 hover:text-gray-700">
                        Next »
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">Build fast and sell more with templates</h2>
            <div className="mt-6">
              <Button className="bg-green-500 hover:bg-green-600 text-white border-0">
                Get started for free
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}