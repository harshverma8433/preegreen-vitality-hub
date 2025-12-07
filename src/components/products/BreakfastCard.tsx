import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Utensils, Flame } from "lucide-react";
import type { BreakfastItem } from "@/data/breakfast-items";

interface BreakfastCardProps {
  item: BreakfastItem;
  index?: number;
}

export function BreakfastCard({ item, index = 0 }: BreakfastCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/breakfast/${item.id}`}
        className="group block bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
      >
        {/* Image */}
        <div className="aspect-video overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent z-10" />
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Day Plan Badge */}
          <div className="absolute top-3 right-3 z-20">
            <span className="px-3 py-1 bg-card/90 text-foreground rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {item.dayPlan}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 z-20">
            <h3 className="text-xl font-bold text-card">{item.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Quick Stats */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">{item.nutrition.calories} kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.nutrition.protein}g protein</span>
            </div>
          </div>

          {/* Ingredients Preview */}
          <div className="flex flex-wrap gap-1 mb-4">
            {item.ingredients.slice(0, 3).map((ingredient) => (
              <span
                key={ingredient}
                className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs"
              >
                {ingredient}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs">
                +{item.ingredients.length - 3} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
              View Details
            </span>
            <motion.div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-4 h-4 text-primary-foreground" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
