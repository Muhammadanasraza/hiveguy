"use client";

import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoShirt } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";

const categories = [
  {
    id: "home-garden",
    label: "Home Garden",
    icon: IoHome,
    subcategories: {
      bathroom: { title: "Bathroom", items: ["Towel", "Paper Holder"] },
      bedroom: { title: "Bedroom", items: ["Boxes", "Bags"] },
      living: { title: "Living Room", items: ["Painting By Numbers", "Hooks"] },
    },
  },
  {
    id: "clothing",
    label: "Men's Clothing",
    icon: IoShirt,
    subcategories: {
      tops: { title: "Tops", items: ["T-Shirts", "Shirts"] },
      bottoms: { title: "Bottoms", items: ["Jeans", "Shorts"] },
    },
  },
  {
    id: "electronics",
    label: "Consumer Electronics",
    icon: FiSmartphone,
    subcategories: {
      computers: { title: "Computers", items: ["Laptops", "Desktops"] },
      phones: { title: "Phones", items: ["Smartphones", "Chargers"] },
    },
  },
];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} style={{ position: "relative", zIndex: 50, width: "100%", maxWidth: "500px", margin: "auto" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "#e5e7eb",
          borderRadius: "999px",
          border: "1px solid #9ca3af",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        <span style={{ fontWeight: "500", color: "black" }}>Category</span>
        <RiArrowDropDownLine style={{ width: "20px", height: "20px", color: "black", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            marginTop: "5px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            display: "flex",
            zIndex: 100,
          }}
        >
          {/* Categories List */}
          <div style={{ width: "200px", borderRight: "1px solid #e5e7eb" }}>
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor: activeCategory.id === category.id ? "#f3f4f6" : "transparent",
                }}
              >
                <category.icon style={{ width: "20px", height: "20px", color: "#6b7280" }} />
                <span style={{ fontSize: "14px", color: "#374151" }}>{category.label}</span>
              </div>
            ))}
          </div>

          {/* Subcategories */}
          <div style={{ flex: "1", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {activeCategory.subcategories ? (
              Object.values(activeCategory.subcategories).map((section) => (
                <div key={section.title}>
                  <h3 style={{ fontWeight: "600", color: "#111827" }}>{section.title}</h3>
                  {section.items.map((item) => (
                    <a key={item} href="#" style={{ display: "block", fontSize: "14px", color: "#6b7280", marginTop: "5px", textDecoration: "none" }}>
                      {item}
                    </a>
                  ))}
                </div>
              ))
            ) : (
              <div style={{ color: "#9ca3af" }}>No subcategories available.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
