import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export type LightboxImage = {
  src: string
  alt: string
  caption?: string
}

export function ImageLightbox({
  images,
  index,
  onIndexChange,
}: {
  images: LightboxImage[]
  index: number | null
  onIndexChange: (index: number | null) => void
}) {
  const current = index !== null ? images[index] : null

  function showPrev() {
    if (index === null) return
    onIndexChange(index === 0 ? images.length - 1 : index - 1)
  }

  function showNext() {
    if (index === null) return
    onIndexChange(index === images.length - 1 ? 0 : index + 1)
  }

  return (
    <Dialog open={current !== null} onOpenChange={(open) => !open && onIndexChange(null)}>
      <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
        {current ? (
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-full bg-black/5 object-contain"
            />

            {current.caption ? (
              <div className="border-t border-border/60 px-4 py-3 text-sm font-medium text-muted-foreground">
                {current.caption}
              </div>
            ) : null}

            {images.length > 1 ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-background/80"
                  onClick={showPrev}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-background/80"
                  onClick={showNext}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight />
                </Button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {index !== null ? index + 1 : 0} / {images.length}
                </div>
              </>
            ) : null}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
