import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Dumbbell } from "lucide-react";
import type { Microgreen } from "@/data/microgreens";

interface MicrogreenCardProps {
  microgreen: Microgreen;
  index?: number;
}

export function MicrogreenCard({ microgreen, index = 0 }: MicrogreenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/microgreens/${microgreen.id}`}
        className="group block bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent z-10" />
          <img
            src={microgreen.image}
            alt={microgreen.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 z-20 flex gap-2">
            {microgreen.suitableFor.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 z-20">
            <h3 className="text-xl font-bold text-card">{microgreen.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {microgreen.description}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs text-muted-foreground">{microgreen.nutrition.calories} kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">{microgreen.nutrition.protein}g protein</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-destructive" />
              <span className="text-xs text-muted-foreground">{microgreen.nutrition.fiber}g fiber</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
              Learn More
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
