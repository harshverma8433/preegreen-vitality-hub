interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitamins: string[];
  minerals: string[];
  antioxidants?: string[];
}

interface NutritionCardProps {
  nutrition: NutritionData;
  compact?: boolean;
}

export function NutritionCard({ nutrition, compact = false }: NutritionCardProps) {
  const macros = [
    { label: "Calories", value: nutrition.calories, unit: "kcal", color: "bg-gold" },
    { label: "Protein", value: nutrition.protein, unit: "g", color: "bg-primary" },
    { label: "Carbs", value: nutrition.carbs, unit: "g", color: "bg-leaf" },
    { label: "Fat", value: nutrition.fat, unit: "g", color: "bg-accent" },
    { label: "Fiber", value: nutrition.fiber, unit: "g", color: "bg-muted-foreground" },
  ];

  if (compact) {
    return (
      <div className="grid grid-cols-5 gap-2">
        {macros.map((macro) => (
          <div key={macro.label} className="text-center">
            <div className={`w-2 h-2 rounded-full ${macro.color} mx-auto mb-1`} />
            <p className="text-xs text-muted-foreground">{macro.label}</p>
            <p className="text-sm font-semibold text-foreground">
              {macro.value}
              <span className="text-muted-foreground text-xs">{macro.unit}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
      <h4 className="font-semibold text-foreground mb-4">Nutrition per 100g</h4>
      
      {/* Macros Grid */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {macros.map((macro) => (
          <div key={macro.label} className="text-center">
            <div className={`w-12 h-12 rounded-full ${macro.color} mx-auto mb-2 flex items-center justify-center`}>
              <span className="text-sm font-bold text-primary-foreground">{macro.value}</span>
            </div>
            <p className="text-xs text-muted-foreground">{macro.label}</p>
            <p className="text-xs text-muted-foreground">{macro.unit}</p>
          </div>
        ))}
      </div>

      {/* Micronutrients */}
      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-medium text-foreground mb-2">Vitamins</h5>
          <div className="flex flex-wrap gap-2">
            {nutrition.vitamins.map((vitamin) => (
              <span
                key={vitamin}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
              >
                {vitamin}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-foreground mb-2">Minerals</h5>
          <div className="flex flex-wrap gap-2">
            {nutrition.minerals.map((mineral) => (
              <span
                key={mineral}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
              >
                {mineral}
              </span>
            ))}
          </div>
        </div>

        {nutrition.antioxidants && (
          <div>
            <h5 className="text-sm font-medium text-foreground mb-2">Antioxidants</h5>
            <div className="flex flex-wrap gap-2">
              {nutrition.antioxidants.map((antioxidant) => (
                <span
                  key={antioxidant}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
                  {antioxidant}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
