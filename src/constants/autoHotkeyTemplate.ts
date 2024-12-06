export const AUTOHOTKEY_TEMPLATE: string = `#Requires AutoHotkey v2.0

#HotIf GetKeyState("CapsLock", "P")
    ; normal hotkeys
    {textHotkeys}
    ; special hotkeys
    {specialHotkeys}
    ; toggle keys (use direct mapping)
    {toggleHotkeys}
; Reset context to allow other hotkeys 
#HotIf

; Block CapsLock default behavior
CapsLock::Return`;