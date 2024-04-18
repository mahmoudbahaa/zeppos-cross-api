/**
  * @zh BLE
  * @en BLE
  */
declare module 'zeppos-cross-api/ble/TransferFile' {

  namespace TransferFile {
    type ReceiveFileState = {
      pending: string,
      transferring: string,
      transferred: string,
      error: string,
      canceled: string
    }

    type FileEventName = {
      change: string,
      progress: string
    }

    type ChangeEventData = {
      readyState: string
    }

    type ChangeEvent = {
      type: 'readyStateChanged',
      data: ChangeEventData,
      timestamp: number
    }

    type ChangeCallback = (event: ChangeEvent) => void

    type ProgressEventData = {
      fileSize: number,
      loadedSize: number
    }

    type ProgressEvent = {
      type: 'progress',
      data: ProgressEventData,
      timestamp: number
    }

    type ProgressCallback = (event: ProgressEvent) => void

    class FileObject {
      //Session identifier for transferring files
      sessionId: number
      fileName: string
      filePath: string
      //User passed parameters
      params: object
      //File size
      fileSize: number
      //The status value of the received file
      readyState: ReceiveFileState
      //Cancel  file transfer task
      cancel(): void
      on(eventName: FileEventName, callback: ChangeCallback | ProgressCallback): void
    }

    type InboxEventName = {
      NEWFILE,
      FILE
    }

    class Inbox extends EventBus {
      getNextFile(): FileObject
      on(eventName: InboxEventName | 'newfile' | 'file', callback: () => void): void
      off(eventName: InboxEventName | 'newfile' | 'file'): void
      emit(eventName: InboxEventName | 'newfile' | 'file'): void
    }

    class OutBox {
      enqueueFile(fileName: string, params?: object): FileObject
    }
  }

  class TransferFile {
    getInbox(): TransferFile.Inbox
    inbox: TransferFile.Inbox
    getOutbox(): TransferFile.OutBox
    outbox: TransferFile.OutBox
  }
}
