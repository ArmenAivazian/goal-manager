# 🎯 Goal Manager

#### Project Status: `👨‍💻 Closed alpha`

**Goal Manager** will help you achieve your goals:
1. Visualize goals.
2. Create sub-goals.
3. Monitor the progress of implementation.
4. Keep notes about Goal.

## ✊ Commands

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>pnpm dev</code></td>
        <td>Run development mode</td>
    </tr>
    <tr>
        <td><code>pnpm build</code></td>
        <td>Build project</td>
    </tr>
    <tr>
        <td><code>pnpm start</code></td>
        <td>Start builded project</td>
    </tr>
</table>

## 🎯 ToDo List

### Features

- Drag and Drop sub-goals
- Shortcuts (is-hotkey library)
- Better Text Editor
- Add an adaptive (mobile version)
- Add a dark theme
- Link one goal to another
- Sort goals in the general list by category
- Pin the importance 
- Change the order of goals
- Add a color for tree
- Sharing goals
- Add reason popup for Reject
- Make Reject List interactive

### Tech Improvements

- Change Data Structure
- Improve performance for opening popup
- Clean up text.editor (make only one theme)
- Add italic style for Text Editor
- Fix font flashing
- Add sort imports
- Change the folder system, with one index per folder
- Add Unit tests
- Add CI/CD
- Create wrapper for Button

### Ideas

- Separate page with tasks by goal
    - a button is needed to mark a goal as a blocker that will be added to this page
- Remove the "importance" field, or at least put it as an additional tagline 
- Divide the progress into conditional points, something like: 1. ToDo. 2. In Progress. 3. Almost finished. 4. Finished
- Change Goal to Direction and Sub-Goal to Goal
- Change Percentage Goal to complet/all progress

### Bugs

- Unbroken string “breaks” the text editor

## ✅ Done

Features:

- Add default percentage for sub-goals by another sub-goal
- Add oportunity to add Reject goals or sub-goals

Tech Improvements: 

- Change Page name string to TS enum
- DependBot Updates (07/02/2025)
