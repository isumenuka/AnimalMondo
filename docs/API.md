# API Documentation

## Gemini AI Integration

### Setting Suggestions

```typescript
async function suggestSettings(
  subject1: string, 
  subject2: string,
  angle: string
): Promise<{
  lighting: string;
  atmosphere: string;
}>
```

Parameters:
- `subject1`: First subject in the scene
- `subject2`: Second subject in the scene
- `angle`: Selected camera angle

Returns:
- Object containing suggested lighting and atmosphere

### Image Analysis

```typescript
async function analyzeImage(
  imageUrl: string
): Promise<ImageAnalysis>
```

Parameters:
- `imageUrl`: Base64 encoded image data

Returns:
- Object containing atmosphere, adjective, and lighting analysis

## Type Definitions

### PromptFormData

```typescript
interface PromptFormData {
  subject1: string;
  subject2: string;
  action: ActionType;
  angle: AngleType;
  setting: SettingType;
  colors: string;
  style: string;
}
```

### ImageAnalysis

```typescript
interface ImageAnalysis {
  atmosphere: string;
  adjective: string;
  lighting: string;
}
```