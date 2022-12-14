import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateRectanglesHandler extends EventHandler {
  name: 'CREATE_RECTANGLES'
  handler: (count: number) => void
}

export interface ExportNodesHandler extends EventHandler {
  name: 'EXPORT_NODES'
  handler: () => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
