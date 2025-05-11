import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function AnimatedButton({children}: { children: React.ReactNode }) {
  return (
    <ShimmerButton className="shadow-2xl">
    {children}
    </ShimmerButton>
  );
}
