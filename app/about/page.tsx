import GridPatternBackground from '@/components/ui/grid-pattern-background'
export default function Example() {
  return (
    <div className="relative h-[200px]">
      <GridPatternBackground
        gridType="lines" // choose from 'dots', 'lines', 'squares', 'crosshatch', 'diamonds'
        gridSize={24} // Adjust grid size
        opacity={0.3} // Adjust opacity
        color="#6d28d9" // Use a hex color
        animate={false} // Enable animation
      />
      <div className="absolute inset-0">Your content here</div>
    </div>
  );
}
