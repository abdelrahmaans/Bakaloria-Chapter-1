/**
 * Chapter 1: Multi-Mode Mastery & Exam Arena
 * High-Security Gamified Assessment Engine
 * 
 * Features:
 * - Cryptographic SHA-256 Answer Verification (Web Crypto API)
 * - Zero Plaintext Answers in Memory & Encrypted Explanations
 * - Strict Duplicate Prevention (Fisher-Yates Non-Repeating Shuffling)
 * - Anti-Cheat Suite (Right-click block, shortcut protection, tab-switch logging, no-copy)
 * - Web Audio API Synthesizer (Zero external audio assets)
 * - Bilingual Support (English / Arabic instant toggle)
 * - Lesson-by-Lesson Analytics Breakdown
 */

(() => {
  'use strict';

  // ==========================================
  // 1. DATA REPOSITORY (SECURE ENCRYPTED FORM)
  // ==========================================
  const SALT_PEPPER = "BAK_CHAP1_SECURE_2026_@!";
  const SECURE_QUESTIONS = [
  {
    "id": "mcq_1",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: تطور عتاد الحوسبة",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "Which 1940s computing milestone was built using thousands of glass vacuum tubes for electronic switching and amplification?",
    "questionAr": "ما هو الإنجاز الحوسبي في أربعينيات القرن الماضي الذي بُني باستخدام آلاف الصمامات الإلكترونية المفرغة للتبديل والتضخيم؟",
    "options": [
      {
        "en": "ENIAC (Electronic Numerical Integrator and Computer)",
        "ar": "حاسوب إينياك (ENIAC)"
      },
      {
        "en": "Intel 4004 Microprocessor",
        "ar": "معالج إنتل 4004 الدقيق"
      },
      {
        "en": "Quantum Qubit-1 Processor",
        "ar": "معالج الكيوبت الكمي Qubit-1"
      },
      {
        "en": "Babbage Analytical Difference Engine",
        "ar": "محرك الفروق التحليلي لباباج"
      }
    ],
    "answerHash": "c3b899a1b0be993a705ff9a80a8e86e4b0f9a18d5b617fc2b4d53882f4bccdc0",
    "encExplanationEn": "Jn0reXoZSQBbBFdMGU5SEhdEXQNGXwhKQxUYFUpZAkYDXQtYA11dRFIHWFRFBw8fEkEWRVxLXRIDWAcAFxYMXgpQQltWVBFEFlUQSRlMRwhbWU8PCF5BV0YESkUJAUkEUgBGTwBSTRFYQkJEVQMQEgBRAlpBXRhBD1gLAAwKQ0QRUgxLUEoVXhBDQhJcS1ZBXl5DAwhNBFwe",
    "encExplanationAr": "u566n+GKuLm6mEK9nOC5uLHpv77B4OIYGFABUQ0fRe3h6MHg5xHgx+zq77UXvs7qxezX7LvgkBK+kbvnuue7mruCu7Dgv7i7QujTvLvgtri9EOziv725m+jb4NTgkb2CQujB4OXpgbySu7Ppnr7vEru8vJLrgeCYv7G6zEO82unn6usY4Zq4srqbutQZ4La4sRAEUUoJUQgQuY28ve7C7ecQv7y4sODV7dgW6LW+y+vmFLyS65bgmL6FusS73UPoyevT4J7g5+nQ6NG9k+C7uYbokr7MGbmf6eXg1uG8vLC7ur+6uLnh4hs="
  },
  {
    "id": "mcq_2",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: الحدود الفيزيائية",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "What physical limitation occurs when transistors shrink to nanoscale dimensions, causing current to seep through insulating barriers and waste power?",
    "questionAr": "ما هو القيد الفيزيائي الذي يحدث عندما تتقلص الترانزستورات إلى مقاييس نانوية دقيقة، مما يتسبب في تسرب التيار عبر الحواجز العازلة واستهلاك طاقة زائدة؟",
    "options": [
      {
        "en": "Clock Synchronization Skew",
        "ar": "انحراف تزامن نبضات الساعة"
      },
      {
        "en": "Subthreshold Leakage Current",
        "ar": "تيار التسرب تحت العتبة (Leakage Current)"
      },
      {
        "en": "Collaborative Embedding Drift",
        "ar": "انحراف التضمين التعاوني"
      },
      {
        "en": "Gradient Exploding Phenomenon",
        "ar": "ظاهرة انفجار التدرج الحسابي"
      }
    ],
    "answerHash": "25f6ac66013d3b29e883fe08bd3d300f1413d5760ab408f6c63988fde25487cd",
    "encExplanationEn": "flAHXQAEUxZzREEWVgxGGQpbW0YUFhBZFkRHDFYQURJeWVhQS1tWWF8MB0BVSkZFAFdfXBhPDgELElxaS0IPBUZcCFFBBFdCVRFRBUEQW1wXSxhRAwZfVQdEQAsTRFgPXxRFWwVBF1NcBAFAQlcIRUNUX1xdXEYQDUBaQV9fT0RVUAhTEwJCX15WEwxWA0YZBFZcExEEQ0wLClREVl5VFFZNHw==",
    "encExplanationAr": "6p+/vLnE7ocQ6ZS9t7qY4dbgievORRh0BwVYBVRVECVERkNWCkEeFunrupnol76dQ++y4LIYvsO8tuyy4IC7w+u3Ru7GurLvtumUvbW7uuDvGOCKv+Pol7vh68MT6Jq+hOyZ68kV75Hp5bqD6JC/tLuR65MY4MG94eqM7J/v0b227c8WuOfvsuib69Xrxeu/vYrggL7P6bC61RO8h+ifv7vsnuvNFe+R6eW6m+m6vp+7uhPgueDMvM/qhuyJ78tE6pK/srnG77LpsuvO69Prsby+4JS+zxDh5722vJQQ6ezovOi3vJoX7p250+yX4NfuyhbqseGyv+O9ne2FGO/Evbbt0e7GurTumR8="
  },
  {
    "id": "mcq_3",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: الحوسبة الطرفية",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "Why do autonomous vehicles rely heavily on 'Edge Computing' rather than sending all sensor data to remote cloud servers?",
    "questionAr": "لماذا تعتمد المركبات ذاتية القيادة بشكل أساسي على 'الحوسبة الطرفية' (Edge Computing) بدلاً من إرسال جميع بيانات الحساسات للسحابة المركزية؟",
    "options": [
      {
        "en": "To eliminate network latency and make instant split-second safety decisions locally",
        "ar": "للقضاء على تأخير نقل البيانات عبر الشبكة واتخاذ قرارات فورية محلية لأمان المركبة"
      },
      {
        "en": "Because cloud servers cannot store image or video data",
        "ar": "لأن الخوادم السحابية لا تدعم تخزين الصور أو الفيديو"
      },
      {
        "en": "To decrease the physical weight of the vehicle engine",
        "ar": "لتقليل الوزن المادي لمحرك السيارة"
      },
      {
        "en": "Edge computing consumes zero electrical battery power",
        "ar": "لأن الحوسبة الطرفية تستهلك صفر طاقة من البطارية"
      }
    ],
    "answerHash": "bb0bf85045817e4f73f1dd1db21eb7124d5511ed4351ed752712ef771e5c0aea",
    "encExplanationEn": "JwZXB0Z7Wl1EQExYWQIUFkVcBVQXF1QXQkZUCQdaVEZGHRVUX1VFB1VeUEMERFNURlYRXQtLVVhQF1FDRwgRCUIMVQMUFU9VRloYXVYRUQhUSkoRBRJeDQZbXwJCW1hUUUlBXUNUBBBRXVxfAkRTUF5WSEFFAEVYXEVWD18UAUEMB0QVCUpeEEZaTV9TSEAUXkMVHw==",
    "encExplanationAr": "usXp5r6V7LjshuCZ78wUvpDq4unTvIC94+u7vcsX6Zjs3e2S6LW9yBTrnejvvJDstO+W6s9G75Do4e3O6NK9xrrR6MW+khXpvO2f6LO8t76Q6uPo7ryAvMXqm0W7sumf7eDsv+mWvO8U653pxr217LYX6YC84+6xEb2fu5O5y7jouoFCTnRURFFbW0gevbhG7ra+m7zI6OK6munMQu+S675E7Z/pkr3K7bntgEW8g+2a7rLr70butenKFbq6udy507qGQr6f7LTshOGy78Lszhfq4ujgvJ+81eqARbqU6Znt4u2S6ZBFvJPrn+nLvJDtghfosL3X75Dp1O3E6MtFucW7tLvn4ITpsey86Z5F7e7vlL+1veHo4rqV6O26humbGg=="
  },
  {
    "id": "mcq_4",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: قانون مور",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 10,
    "penalty": 5,
    "questionEn": "According to Moore's Law (Gordon Moore, 1965), the number of transistors packed onto an integrated circuit doubles approximately every:",
    "questionAr": "وفقاً لقانون مور (غوردون مور، 1965)، فإن عدد الترانزستورات على الدائرة المتكاملة يتضاعف تقريباً كل:",
    "options": [
      {
        "en": "2 years (18 to 24 months)",
        "ar": "سنتين (18 إلى 24 شهراً)"
      },
      {
        "en": "6 months",
        "ar": "6 أشهر"
      },
      {
        "en": "5 years",
        "ar": "5 سنوات"
      },
      {
        "en": "10 years",
        "ar": "10 سنوات"
      }
    ],
    "answerHash": "91eeedbda4f8b1438a128aaa90222e1015e2d9844ca4df602cea17b4ddd8a0d7",
    "encExplanationEn": "dF4KFwBDEUQOVhVdEEdVR1EOXxJLFQAVXFQSRloERRBFRwRcF1BLQFsRQVABCEVZRhpFDl8XC1oQAQNKAEQBUxlcDAYXCwEMCEQVGBBeQVRQDUgSXA4UA1VVQRJXE1RCSBURRQsZQVFVERIYRAJEWUQKCwYRUwdXBQABS0FfAhdcSRUKCwEMEAhVChgBXllDTRVYXF9BBhNWR0ZaHA==",
    "encExplanationAr": "4Le90EW94LzG7eDh6uiyE+Hk6Lrg0EG5gOm267tF6ZPos0Xr5+GT7JO64OzNRu6X6+e9y+mGupO94ryKuYO8neC5vdS9w7rOQezJ4MXpmuq8QemV4eW51eGB6pXqw+mdEe3C6+Dhl+22uuvt5r6fEOrJvcvpgbqTvN29uUHp5+69Eb3cvcO74bi+v75C6Z7qurmA67K5ybme6bnqvkXouOiyvLpE4L3sk0O4trzB7p8Su8K4te/I7NO97ODQELyQ4LW84r3DusK4sEbh4+i+E+DS6YPg2LnIGeiV67a9nOm57cLq1+Cy7JxDuLy8we+26s284OmQuoJEvM7h4ung7rjpz7zivMVEuLC+gbuz7bvgzh8="
  },
  {
    "id": "tf_1",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: الحوسبة الكمية",
    "typeTag": "True / False",
    "typeTagAr": "صح أم خطأ",
    "modeCategory": "mcq",
    "points": 10,
    "penalty": 5,
    "questionEn": "True or False: Quantum Computing is designed to be an everyday consumer replacement for smartphones, tablets, and personal laptops.",
    "questionAr": "صح أم خطأ: تم تصميم الحوسبة الكمية لتكون بديلاً استهلاكياً يومياً للهواتف الذكية والأجهزة اللوحية والحواسيب الشخصية المحمولة.",
    "options": [
      {
        "en": "True",
        "ar": "صحيح"
      },
      {
        "en": "False",
        "ar": "خطأ"
      }
    ],
    "answerHash": "e5d98c65f8b4aaf9f3d62ed3c99f455c94d6095f41aa20972d45030a50fa570d",
    "encExplanationEn": "I1QISl1NFmQTWQxAFAxGWgleFENGABZAQ0tcF0FcRwYZVxZPX15QCF1SQRJHUhRNVxZbFVNcXw1cXgFBVFlURBZFAVpRAlpcHF1CXQ9BF0wHXRBDX0UHWwZUUBVAR0xDSl0JQ1xYQQ9bXxJNElNWWkIIUU0QXEAVXF0PG1RDWQsLGURYVgcWVhRBEkAOBhRYFlsd1LLxClwXGV4DWlBHAlUUFFNCSloIVV1BAl1dSUJGDVpSHg==",
    "encExplanationAr": "vZu8juDAGBW+n7uwucy/sb6UvIXr77ybQ+Gev7Dstrq87e7umRntzOycucvql+GbEryb7YHrnLmS6MxB7Zro1b2SvIjgyhbs5+DF7Me45OHPE7yR6+G8mbuR4dftv+3MGe3s7prhm76e6dRB6pjhmuvgFOy164m5g+niuZLvmkS9kr294Mnugb+5u7650L61Rurs7pW84Orm4ZS+k+y2u57szRbonuzi7J250+u64ZHr7uycEOuXuLHp5bi/7rW97+3D4Z66vO3P4O4UuOm/vb+5vIUSvODryeGNvo7sv7q9FLyR6b3tzOyGucnruuC16sPsnxDrl7ix6ey4ve61ve/tzRng2u+xv7FC7Ma44uHL6uzulb3X6unhkUbskuzn4YC8mOiM7OzsmE8="
  },
  {
    "id": "mcq_5",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: بنية الخلية العصبية",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "In an Artificial Neuron, what parameter serves as an additive constant to shift the activation threshold and control firing independently of inputs?",
    "questionAr": "في الخلية العصبية الاصطناعية، ما المعامل الذي يمثل ثابتاً يُضاف لنقل عتبة التنشيط والتحكم في إطلاق الخلية بصرف النظر عن المدخلات؟",
    "options": [
      {
        "en": "Synaptic Weight (W)",
        "ar": "الوزن المشبكي (W)"
      },
      {
        "en": "Additive Bias (b)",
        "ar": "الانحياز الإضافي (b / Bias)"
      },
      {
        "en": "Hidden Layer Depth",
        "ar": "عمق الطبقة المخفية"
      },
      {
        "en": "Learning Rate Decay",
        "ar": "معدل اضمحلال التعلم"
      }
    ],
    "answerHash": "02ccb2012589a0b918f76c0f359f6175b997264dea76d7293492c51f77abe678",
    "encExplanationEn": "ZFoGQyBbUUISHVoQQVkRGVBWRlZSB1kSWkNcRlVeWUYWWFdDEkJcBRFBRF4NUUZKE0BRV0NUUhJeQQAWDFlZGFZHDQAWW19fElZNSxdVQlhdVwhQFhdYAxNUQQ9FHRdUDlVWQFtYU0QRCVIWClJHS1xaGUYMFVcPRVJBBxNTWRhHWgYNQkVVWFVdTFwFEAtXQU0SRBYQRQsTQVZGTFRFWkw=",
    "encExplanationAr": "6JW657qV6bfqmOGzuZe6ixEQJF5XEBlG6rLg7hbotezo4Lzvmxbsz73G7568neqQE+286tXtlr+278hCvZzvium4u85C67XotO2V4Ofp6xnpl76Q7+fozxPtnr+y6Z3s5OGN7rjug7zpQe6zvbLqnhPts+rJ7Lu+mhe45ryy75bptrrpupsQ6ZXsvOHY6NfhmeHs759D6MXqsxm+nOix7dbhjhfqm+zOvOgX7sHvguGUFOCxu5Lo4Bfu5LrJ77LhuOraQ7qV6bXrsOCWuZ67vemfvp0Wu5e/t+y8v77phezq4L/vmxbt4b3S75G9v+uz65PguUPstb+z79S75O6GFg=="
  },
  {
    "id": "mcq_6",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: دوال التنشيط",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "Why is an 'Activation Function' (like ReLU or Sigmoid) indispensable in an Artificial Neural Network?",
    "questionAr": "لماذا تُعتبر 'دالة التنشيط' (مثل ReLU أو Sigmoid) ركيزة لا غنى عنها داخل الشبكة العصبية الاصطناعية؟",
    "options": [
      {
        "en": "It introduces non-linearity, enabling the network to learn intricate boundaries rather than collapsing into a simple linear model",
        "ar": "تُدخل اللاخطية (Non-linearity)، مما يمكن الشبكة من تمثيل الأنماط المعقدة دون الانهيار إلى معادلة خطية بسيطة"
      },
      {
        "en": "It speeds up cooling of the GPU graphics card",
        "ar": "لتبريد رقاقات المعالجة الرسومية GPU"
      },
      {
        "en": "It eliminates the need for training data entirely",
        "ar": "لإلغاء الحاجة لبيانات التدريب تماماً"
      },
      {
        "en": "It ensures the network never makes any classification errors",
        "ar": "تضمن عدم وقوع الشبكة في أي أخطاء تصنيف مطلقاً"
      }
    ],
    "answerHash": "847290dcfbf96238063f4d499daccff20a0a1c3e77a8b570486b581622a7b970",
    "encExplanationEn": "b11DWlZFEEMIDQgUWltdXVFEEwdXEF1PWBAIDA1GAEdeAkQIXg1ASRdEFVkBXl5eUxgHUgUYX1NHQABbQlVWSV1GRBJQQ0QOBxYOXFtTR1FTV18KTURdXVwKFQoABwoSRA4QABEQWgtQWwQYDlxZVVVKFhBQX0NTQUEIWAwVF1lWV1ZCWFIIBkYNABlaV1JKXl9dARQHW1RJCAQbQxYHRkQEQg9CQ18MXFJBTgtGXl9aGFkQFVRQWFVHAFAHFw==",
    "encExplanationAr": "4JzvneC4veVGusnhkeu34JkW68Ht4OyT4OK517rsvoUQuZe4tbq3vZDvz+DV7L3oneC6Quy56ZPrtEHvzeCy6JQU7rfhlrzEvshG4ZHrt+CH7pu/tryT4ZNEucS64r6L6NToyejp68wX7uvg2+2Q6JvhskLtiei86pW5gbuz75fhvxfrvOjdu8G6yeCy6poY6Jjr0e3u7JAZvem7xL7L6p+5mUHpy+vW7r25j7qc77wU4b67seCWFuu4uLK7uu62GO2z673o0LvOu+XhnxLrlem86uDt4+yeGbzLuua/7Ou6uYJB6cTq4e+CuLC6hBfol+G+Quy96Y/qlbizupXvmRjskOu96eC73LrB4ZwS65/psuvR7Mzts+HduOm7z0bql7i0uLS7iry1787gyxs="
  },
  {
    "id": "mcq_7",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: الطبقات المخفية",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "What is the primary operational role of the 'Hidden Layers' located between the Input and Output layers in a Deep Neural Network?",
    "questionAr": "ما هو الدور التشغيلي الأساسي لـ 'الطبقات المخفية' (Hidden Layers) الواقعة بين طبقتي الإدخال والإخراج في الشبكة العصبية العميقة؟",
    "options": [
      {
        "en": "Hierarchical feature extraction and high-level representation learning",
        "ar": "استخراج الخصائص بطريقة هرمية وتعلم التمثيلات المجردة المعقدة"
      },
      {
        "en": "Directly reading raw binary files from the computer hard drive",
        "ar": "قراءة الملفات الثنائية الخام مباشرة من القرص الصلب"
      },
      {
        "en": "Rendering the graphical buttons on the user's interface",
        "ar": "رسم واجهة المستخدم وأزرار الشاشة"
      },
      {
        "en": "Validating user login passwords through cryptographic salts",
        "ar": "التحقق من كلمات مرور المستخدمين عبر التشفير"
      }
    ],
    "answerHash": "9a3dce235b344e9184722247ac6aa1e32406e9e2f9ad39fc2b12a090d117e729",
    "encExplanationEn": "cQhXAAYLEl9UG1ZGR0VcSUxGVlFGEkRFDgREBBJCDEVXWEkWDVACWgNLTAhWTwMPEgRUUxVFS1UXCxFSBEVeQBkNUh0GF0ETUQdHUVcRGVRcU1JBElNaU0EXUxkVRBdWQRgQQQ1QCVdGXQQBQ1wUQ14DSFcTQxlTC1xBWBZSElpWDEMIBhFXE1oAWVFXERlCTEZCUUZHRlISTQ==",
    "encExplanationAr": "4cvrzrrt67fs6xPsk7y96Y/sn+uw6pPvy0Puxri1vLbqmum3vLO9m0bhxryA4cy7nLqA6sbolRC8luizvZnqjOHG68K70BLrn7qc7IW8s+mU7b3qleu/DUG7kbjl6dLrmu2y7sLhzxK+nrjg65q/6+vm6LtB6JPp5+mb79Husxnhxurgu8jru+3F6rUUvLHpn+2z6pzqg+7pu4G57RG8u+qT6bK9jr2av7u5w+uTRruVu7XqwuiA6eHosxe9neqI4OLrzEO8t+qxupTtsb2UEeCT7rbruuybuOQWucLo7RPqk+myvZq9hr+6ucPqvUa7lbu16+TogOnm6Z7vzBk="
  },
  {
    "id": "tf_2",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: الخلية الخطية",
    "typeTag": "True / False",
    "typeTagAr": "صح أم خطأ",
    "modeCategory": "mcq",
    "points": 10,
    "penalty": 5,
    "questionEn": "True or False: A simple single-layer perceptron without an activation function can successfully solve non-linear decision problems like XOR.",
    "questionAr": "صح أم خطأ: يمكن للمدرك الحسي البسيط أحادي الطبقة بدون دالة تنشيط لاخطية أن يحل بنجاح مشكلات التصنيف اللاخطية مثل بوابة XOR.",
    "options": [
      {
        "en": "True",
        "ar": "صحيح"
      },
      {
        "en": "False",
        "ar": "خطأ"
      }
    ],
    "answerHash": "e8cb7bb2ee717237b2ba01609cf90341cca2d2e8942c55642c07800c34887505",
    "encExplanationEn": "I1kPEVJMQmYNABdYWVNRXg5bFhgQXlAQSgoIXlxWGV0CGgRARF4MVlxVQENFUERXVxNERVdeQ0NHWxhLUkVRRwRMBkJZDQwfCQxZVFZAE1MDRgNBGF1fW1xDPnZiGhRZChAVXRZbBllVWEtDVlRDR1cHEENQVRAFWkZLTBd0eRUyUQ0WUhBCRwsRXl0XX0ZbFltPDVFIU0IZDQlXHV9dXwYCExIKVxFPVkZZEBVQW1FABFVTFg==",
    "encExplanationAr": "vZa71e/BTBK93O+d74AT78Xr5rmY6YfoirvO4ZrrhejruucSvJG9leGT6szsvxbslbq074/omLqx7JEY74zps0Xh4rqCu+YSvc3uu++V6rG6lbrLEGl5Yhm64uGX65rp1Lrr6sPr7hjgt+rE7LMW7IG7mO+Q6Je6uBTgie+T6b+9i7ro78W7uUW8tui9Euuaup276eiaFhfh176T6JTskEO7xuvg6tXhuuyVu5QV7pPr5+iQ4IXo1Oqy4J/vjOm/ReDEu7O6wevtvLMW774T7urqz7i/6LIQ4dO/vemwFOnLu9nr4+vt4IgU6sTsse6A6svptOCX6MkT7b3gne2J7crgzLqeQrqVvOHvhu+a6rW6lbrLEOi+6J664uGf6rzpxLrlEryVvLzgsOrE7Zvug+vp6J4W"
  },
  {
    "id": "mcq_8",
    "lesson": "Lesson 1-3",
    "lessonAr": "الدرس 1-3: نظم التوصية",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "A streaming service recommends movies to Alice based on the viewing habits and ratings of thousands of users whose tastes closely mirror Alice's. What algorithm is this?",
    "questionAr": "منصة بث تعرض ترشيحات أفلام للمستخدم 'علي' بناءً على سجلات وتقييمات آلاف المستخدمين الآخرين الذين تتشابه أذواقهم بشدة مع علي. ما اسم هذه الخوارزمية؟",
    "options": [
      {
        "en": "Collaborative Filtering",
        "ar": "التصفية التعاونية (Collaborative Filtering)"
      },
      {
        "en": "Content-Based Filtering",
        "ar": "التصفية المبنية على المحتوى (Content-Based Filtering)"
      },
      {
        "en": "Edge Network Sharding",
        "ar": "تجزئة شبكات الحوسبة الطرفية"
      },
      {
        "en": "K-Means Micro-Threading",
        "ar": "التفرع الدقيق لخوارزمية K-Means"
      }
    ],
    "answerHash": "78c7f529f5df6330d984d72ef63b0554f90a5b92dd3a632de028681e6ebc8314",
    "encExplanationEn": "dFcPWwdXXUsHQQ0QUxN1WQhNXUYNWVVFClNFB0JUUlEVGVMTWhVdEhMNQAVZXhIGHBBbXFNWRQxQHAsNXxNSWEJLF1IURhJWABURFVNBQBATUExcRERbCA9aUhAQXVxHElZCCFYDVRIUFlYHU0FXCgZVQRhCVxEGRAoREBVBVFdYVQ5SCFESTAhGAQNYE1pEAVRLGg==",
    "encExplanationAr": "75+6s76f6oy/tL3s7poT6MPgvOzO74u9we+7u7bsv+zPGRgiWg5VUwYLQQBCWkQBRXZbVEJdQwxYAktD4Jnpje+SurK+mhLh3+zgv78T64O9veG8vbQSvO7umbuy7L/t7OC1uZK6kxK8w+rl77bqyL2a673ugRG8tbzhurzrqhTuubudvoTqjb6YRL+y6rfp4eGL7M7vnL3J77ZC6bDtk0bhk7mMupXqzETq5O6A6s69nuqX773o7+/jQrua65/shuHp7uAV67O+gbzO77TquL2/4bNE7rO87Bbrxemx7Z6/uOjX7OjgtrzD68sY"
  },
  {
    "id": "mcq_9",
    "lesson": "Lesson 1-3",
    "lessonAr": "الدرس 1-3: الصيانة التنبؤية",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 8,
    "questionEn": "In industrial predictive maintenance, what crucial health metric is estimated from vibration and thermal sensor time-series to schedule repairs before catastrophic breakdown?",
    "questionAr": "في الصيانة التنبؤية الصناعية، ما هو المقياس الحيوي الذي يُقدّر استناداً إلى سلاسل بيانات الاهتزاز والحرارة لجدولة الصيانة قبل وقوع عطل كارثي؟",
    "options": [
      {
        "en": "Remaining Useful Life (RUL)",
        "ar": "العمر التشغيلي المتبقي (RUL - Remaining Useful Life)"
      },
      {
        "en": "Zero-Shot Context Window",
        "ar": "نافذة السياق الفوري Zero-Shot"
      },
      {
        "en": "Cosine Dispersion Factor",
        "ar": "معامل التشتت لتمام التمام"
      },
      {
        "en": "Backpropagation Momentum Decay",
        "ar": "اضمحلال عزم الانتشار العكسي"
      }
    ],
    "answerHash": "c082b69f2d4973dd40d4874c9cca3d5b764719a2773053b76ae7721e5f506332",
    "encExplanationEn": "MVVVUwtYUAhVRGFKUlURCBR8DVJdFxwxbC9KQUMWUAZeVUBEEU0JVxdSS1FWR0JYRgQXVkNbXgtUChVYWUZBQUNfShIBT1oKVxcUS1JeBQ1aWQpTGFFbERkCDUFaClEXREJGXlBVQV9WVFtZW1ZCVFkMFVhZV18RFQRQVllBVhIGSEhXAUJcAhICVVBbRhYBGg==",
    "encExplanationAr": "u5fhtrqP4OPq1RThkOrgvbHp5e2y75tD4cS65erh7cjvnu216LNBGmVifxkV6uXuvkG9kO626dfs4+y2FuuQ6+sQ4Iu6meHJEryb4L/r1byT6M4U4JDt5+HJu9Xr3uzo7rIU75bg5euy75npverg74+5zBfvlejh7OPtmu6b6rC6uuCbQu+9v7a9tuGA6928nRC8k+Gz7ebg6bri68Ps5O687bTos7mbF+6x6J3q5hfuwryxF+qbvLS+gemy678SurXht7qRGb+4vIfgsuvJROyYvJPghOzJ4cu7zuvD7ObuseyQEeDg670X65fst7qd7+m8te646c8VvpLpsuq26sjon+vm77NI"
  },
  {
    "id": "mcq_10",
    "lesson": "Lesson 1-3",
    "lessonAr": "الدرس 1-3: تشابه جيب التمام",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 7,
    "questionEn": "When computing user taste similarity in high-dimensional vector spaces, what does a Cosine Similarity score of exactly 1.0 indicate?",
    "questionAr": "عند حساب مدى تشابه أذواق المستخدمين في الفضاء الاتجاهي متعدد الأبعاد، علامَ يدل ناتج تشابه جيب التمام (Cosine Similarity) إذا كان مساوياً لـ 1.0 تماماً؟",
    "options": [
      {
        "en": "The vectors have identical angular direction, representing identical preference profiles",
        "ar": "المتجهات لها نفس الاتجاه والزاوية تماماً، مما يعني تطابقاً تاماً في الاهتمامات"
      },
      {
        "en": "The vectors are completely orthogonal with zero correlation",
        "ar": "المتجهات متعامدة تماماً ولا توجد بينها أي علاقة"
      },
      {
        "en": "The two users have completely diametric opposite preferences",
        "ar": "المستخدمان لديهما تفضيلات متناقضة ومتعاكسة تماماً"
      },
      {
        "en": "A computational overflow occurred in the floating-point unit",
        "ar": "حدوث خطأ فيض حسابي في وحدة الفاصلة العائمة"
      }
    ],
    "answerHash": "ffecc0f0b4935efbe7caae5a9810629638f54377d986d25e5ad2952d2c53e576",
    "encExplanationEn": "JQkWCg1VRkMLWVBfVBcPFhwXDgQAFkATXEsRRF5XGVddXwpQFFFSQxNcXVhERFAGQQ4WQQMVUQtBSwXx1RwXC0ZXS1NDXQNRDEcZR10ARhQAVBcOExYVEVZRX0QWW1cWR1ADFV1XUlkQUFtXCBJRDEcEB0ZQWlxIEhBcVAtcUU8PCAJDDVUHQk9dXVZbEQ8BBFtDERMKUwhVXUIe",
    "encExplanationAr": "v+y84bq6voNC7JPrgb3Bus3u5EG5yezr4ZAR6JHrve6Z4ePtk+qyF7ye4bK8gO3C7Om9uOGcEryaur/q4xXvkb/ivOa7mr6cu7PhlO3PXEK9jrrnucrs5OGfEeic67rvu+HgFeyU7rO8i+CRvbrs7+3IRAIZ7LO8l7qzE72Z7ry+zkW7xOni6MjtvOuSvONCWBdST1G9uUHgvei17pUZ77ng3+yy6r0XvJPggbyV7c3s40Tqnu2YvJ67kuriFe+cv+e91bq6v7S6k+GZFb3Bu+Hu5rnSvZ+5l+Ce6bPrs++1GL6d7JTus7264JG9t+zhGw=="
  },
  {
    "id": "tf_3",
    "lesson": "Lesson 1-3",
    "lessonAr": "الدرس 1-3: مشكلة البداية الباردة",
    "typeTag": "True / False",
    "typeTagAr": "صح أم خطأ",
    "modeCategory": "mcq",
    "points": 10,
    "penalty": 5,
    "questionEn": "True or False: The 'Cold Start Problem' in recommender systems refers to an overheating processor that requires liquid nitrogen before booting.",
    "questionAr": "صح أم خطأ: تشير 'مشكلة البداية الباردة' (Cold Start Problem) في نظم التوصية إلى ارتفاع درجة حرارة المعالج وحاجته للتبريد قبل الإقلاع.",
    "options": [
      {
        "en": "True",
        "ar": "صحيح"
      },
      {
        "en": "False",
        "ar": "خطأ"
      }
    ],
    "answerHash": "4b75535dd32a36771baa0f3ee3d33d15d0609668427bfdef8355ee6a7a899f5c",
    "encExplanationEn": "cgNbRlAdFScLX1ZBYEJWRUVCEwRWA0EWRUcLE0cMVBUAWVBWUFVDVEBLFw0ARBUUV1dAVgwLUUFWAltMSwdBBhQQUlZaXlgBCldTFVpZWUQRBA4TEARBBAtXSV1WExFAF1VEQxlZRBhaV0AOH0QQFlRcVFEAARYIQwRVShkSXQJAQl9UQ1YVHgFBXUFaWENSQwMCFVkJXUUNWhdHXBZIGw==",
    "encExplanationAr": "7Mzvgu2QG0S9turV6rXus+nLQbmXv7e9zevL65S9u+3NEO6X4LLukOyV79O+y73PGOuf7dG8vLmGQeCc4OLs6hS6gu2M6r28zOubQeuc7rXpzbjr6eMTvc/q7OuGvbvtw+icEOGZ77rtuO7gvs1Fv7zqsO3WvZy5mbmX4LxG7c/sze6/7ZwVvM7qt7mU77LvlrvqQejF6u1F6uHqtbyb7cgQ7pPgue6O7bju40a8yL6X6r/tzr2RuLxB4b3h3+3M7ecX7Z/qvb3l64NB65XuvRG6ybi6vpS84+vD65lE6Ya8l+6Y4LTukRTrs7vhRLzi4bftn7zj7snvxRjhkb+zu5O6luy+E+3dvbfr6+qx75Af"
  },
  {
    "id": "mcq_11",
    "lesson": "Lesson 1-4",
    "lessonAr": "الدرس 1-4: المتغيرات البديلة والتحيز",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 8,
    "questionEn": "What is a 'Proxy Variable' in algorithmic fairness and AI ethics?",
    "questionAr": "ما هو 'المتغير البديل' (Proxy Variable) في سياق عدالة الخوارزميات وأخلاقيات الذكاء الاصطناعي؟",
    "options": [
      {
        "en": "A seemingly harmless feature (like postal zip code) that strongly correlates with a protected demographic (like race or income), inadvertently injecting bias",
        "ar": "سمة تبدو بريئة (كالرمز البريدي) لكنها ترتبط بقوة بخصائص حساسة (كالعرق أو الدخل)، فتنقل التحيز للنموذج خفية"
      },
      {
        "en": "A software testing variable used to measure inference throughput",
        "ar": "متغير برمجي تجريبي يُستخدم لقياس سرعة معالجة النموذج"
      },
      {
        "en": "An extra hidden neuron used to accelerate gradient descent",
        "ar": "خلية عصبية إضافية في الطبقة المخفية لتسريع التدريب"
      },
      {
        "en": "A firewall setting preventing unauthorized network intrusions",
        "ar": "إعداد جدار حماية لمنع الاختراقات الخارجية للشبكة"
      }
    ],
    "answerHash": "7744965c61934c0753d433c0ce64eed3df3eb18caf064ef40ade3e3e204a405b",
    "encExplanationEn": "Z0VbTEAWQwJEWFhRWAZDF1RfCFtEEwFZAhYWQApFF10BB1hFC18CQwQQVVgUDAAUQwQKFloRWhNXEFIIUVxRERdbXV9cFlIGWFVcQRQMQhdQRwxaWlAKRBpFV0YARRZWCQlFAAYdGBUAFFlXVgkDRxANDQ5WRV0AW1dcA1tCXQ1YUxRXVlJQQ1lDGUBXC19YWRMHVV0TEVUAClhHERcRUBBGRw0NQl1DERRfQlEGElFUQQcJUhZAAEEe",
    "encExplanationAr": "75DtsOCz7cnui+C57NLokO2ZROyU6ufoy72Z7e+84OvNRuvPuoLh5rnLEO6cvczsg7jgvLdF68LrtOzL7J3s6O+F7K8Z77S7m+mT6r1D6bPsu0TsnuvT6eK9nBS9wr23vNXrybu14MS5zBDuk7zi7IG517y2vLm9mxDt5e207dvvhu22Ge6Wur4R4ZTt5+ib7LW8h+u/Q+nivZPt40W8m73s68K7t+DEucwQ77G9ze20QbzC6uHryOu6FLmT6bG6hO637b/vv0PukuC7FLuX7rHr1e2269EQu8LvsL3NvIK97OvKu7sYu8u+ie+3vdUU6Mu94ermE72V6bC4teiTupDvnhTgvu3J77fgse3nEO+S6uDsmevO6em9hBo="
  },
  {
    "id": "mcq_12",
    "lesson": "Lesson 1-4",
    "lessonAr": "الدرس 1-4: الذكاء الاصطناعي القابل للتفسير",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 8,
    "questionEn": "Why are explainability frameworks like LIME and SHAP deployed alongside Deep Learning models in medical diagnostics and credit lending?",
    "questionAr": "لماذا يتم دمج أدوات التفسير مثل LIME و SHAP مع نماذج التعلم العميق في مجالات التشخيص الطبي وائتمان القروض البنكية؟",
    "options": [
      {
        "en": "To dismantle the 'Black-Box' barrier by revealing which specific input features influenced the AI's high-stakes decision",
        "ar": "لتفكيك حاجز 'الصندوق الأسود' والكشف عن العوامل المحددة التي استند إليها قرار الذكاء الاصطناعي الحساس"
      },
      {
        "en": "To automatically write SQL queries for database backups",
        "ar": "لكتابة استعلامات قواعد البيانات وإجراء النسخ الاحتياطي تلقائياً"
      },
      {
        "en": "To reduce electricity consumption on quantum supercomputers",
        "ar": "لتقليل استهلاك الكهرباء في الحواسيب الكمية الفائقة"
      },
      {
        "en": "To bypass data privacy regulations without legal consequences",
        "ar": "لتجاوز قوانين حماية الخصوصية بدون عقوبات قانونية"
      }
    ],
    "answerHash": "5635078ba50cc5cbb6d0e9e5bba00d72a8cd7cdb8c03563ed91bb92eeb21ca9f",
    "encExplanationEn": "cE5DWVFeVgMDWVVDInxDSjp3LRlFTQpaDhFBXFkPUhItcS4hFwIKBhgweHJlFlAKCUlEFgcZVAAEFkdDBkFYEkFEWldFQ1END0YcQwZNEw4DXwpZC15FQQ1CBV9TEFhAEhgMFhcPCwNWQ19VU19QABZKEQcaWFERCRsSRgsYGQdbFnJ8EEVdAwJdVQdDVEMFC0ABXkVdDFQFDA5DRA1UEg5KQwhSDQALVgQQUFpYUAkRSlgNDBc=",
    "encExplanationAr": "7ZXrmum/4MW5nxC7xOznutLv5+jC4cQVusW4tOjD74e5j7ri78S82+HpEOuS77e85uGWusrgtkW85uu1u8vg5+2F6r/ohhhKOXR5SkPs5rrJ7+AQKXAocEK76RBjLHZiQeDJvbS70Lu5Q+m77YTq40TgsrvmGerWvOfqmLvtGb+w77vsse+JusgV6ea7nbvTuoe8l72TRe3Wu+Dol7226sgYuuDu57zB4NTom+2R68RE4Lm75+GBvcG7uujnuLNG7ZHqseiQ4MS5n+nmu5K65ELuyent4OEVusG5g+jM75W5kEO8kLvOupa7l+uFFuvCvb3o4LqI6sK90xw="
  },
  {
    "id": "mcq_13",
    "lesson": "Lesson 1-4",
    "lessonAr": "الدرس 1-4: المسؤولية والمساءلة",
    "typeTag": "MCQ",
    "typeTagAr": "اختيار من متعدد",
    "modeCategory": "mcq",
    "points": 15,
    "penalty": 8,
    "questionEn": "What is the critical distinction between 'Responsibility' and 'Accountability' in the ethical deployment of autonomous systems?",
    "questionAr": "ما هو الفارق الجوهري بين 'المسؤولية' (Responsibility) و'المساءلة القانونية' (Accountability) في حوكمة الذكاء الاصطناعي؟",
    "options": [
      {
        "en": "Responsibility is the technical execution duty of developers; Accountability is the ultimate legal liability borne by organizations for societal harm",
        "ar": "المسؤولية واجب تنفيذي وفني يقع على المطورين؛ أما المساءلة فهي المسؤولية القانونية والمجتمعية التي تتحملها المؤسسة"
      },
      {
        "en": "Responsibility applies to software; Accountability applies only to hardware cables",
        "ar": "المسؤولية تنطبق على البرمجيات فقط، والمساءلة على عتاد الكابلات"
      },
      {
        "en": "Accountability can be automated using machine learning scripts",
        "ar": "يمكن أتمتة المساءلة القانونية باستخدام أكواد التعلم الآلي"
      },
      {
        "en": "There is zero legal difference; both terms are 100% interchangeable",
        "ar": "لا يوجد أي فرق قانوني بينهما على الإطلاق"
      }
    ],
    "answerHash": "ce0d63b3d1c75e1acf7859b2c55c9d9c73fc642dd031b6665c26118ac447dfa6",
    "encExplanationEn": "JgtXDVhWB0EXEQZPUBdSCBADF0xQWgpcClZUDxkWXBBHXAgQX1ZbCA1EShELWBZUQApeUlhfX0EBQVMaAhQEU0MIXwBTXxEfRFMWQxUKQwYCCF5CVE0LXQ1GFQJXABkPUlICBkRHWg0UEFteDlIWX1sQRl9FREwIDFpVW0QHAlUMEF4QV1ELXw1FGhdAC1UEEUZDUFAZDlMUFVMMS0RdAlpSAQZFGg==",
    "encExplanationAr": "uu/ozu6eu7a9tUPvkry1uOa+n+CE4Ofqz+y9ur9E4ObvgL7H77zr4L2665hC77fvs7q47pgR4eC6vhTu577L7sS9mLyfE7qUvbW7lOzm6Om7we+XFeDq6+bthLuevJW7juvPQ+6T6+C8muucu7zuhO3vEu+16Lu45RTskL3iuLO7wejX7oC6lLybQ+69vZS5zL6Q4IThxerJ7LK7nkThye+Zvs7vsevgROiU6Obvs+6Gu5XukOi8ucoU7JC94ri0u8Lp4u+7u7W9u7ueFb2WuOe/tOCS4Ofr5+2cQ+Hd4OUX68W6vBTqx7yG64C6ke6HFbq07pbpkrnP7J0XvN+4sEO9l7yF68jryunM75K8tEG7zO687LpC6sTssbuavb+7j+rju58a"
  },
  {
    "id": "tf_4",
    "lesson": "Lesson 1-4",
    "lessonAr": "الدرس 1-4: هلوسة الذكاء الاصطناعي",
    "typeTag": "True / False",
    "typeTagAr": "صح أم خطأ",
    "modeCategory": "mcq",
    "points": 10,
    "penalty": 5,
    "questionEn": "True or False: AI Hallucinations occur because generative models have malicious consciousness and intentionally craft falsehoods to mislead users.",
    "questionAr": "صح أم خطأ: تحدث 'هلوسة الذكاء الاصطناعي' لأن النماذج التوليدية تمتلك وعياً شريراً وتتعمد تأليف الأكاذيب لتضليل البشر.",
    "options": [
      {
        "en": "True",
        "ar": "صحيح"
      },
      {
        "en": "False",
        "ar": "خطأ"
      }
    ],
    "answerHash": "c3b7f151a64e609b4242d14ee43625387c3088ea1aa94697f352d31362be18e5",
    "encExplanationEn": "JVIORAMfFXYEWFEXV0RQFFESWV0AVFgWRVtDU0BUR10XE0ZCXVQcQV4PQVRVQlFSC1JBWwdSXRNGQA0HUFoMWQpHGxcSXhVBE1NQDFVEGRZcVxRfC0JARRVYUkNBXFFUUkNdVUBMRRVeCgRXGBZUVg1aW1VEW0ReV1xCBkNREVwAUg4XEFRHWAdfVwRCWVYMFFNTUw1fRxFFREFfX1RBQRcQXEVKWwASEQwAV1BXTVgUShs=",
    "encExplanationAr": "u526gL6SGxG4se3h77jh0eybFOrD6LC84+227pXtg+CbQ+uX4by9y+jpuL3tvOGYv7ntm0Tqt+uR6si9neDMFbuKu7FG6ZLp2O6evLPonrqb67PqwxHs3Lyw6r8S7ZThs7uZ6b7gzbmVQbme7bLhkr6e7Ye8lOmV77hCvLXh4ezg6ubu4+mcEbmR7eHumuHF7bbtuLyYFL3K7bvvtBXrne/M64Hgn7ziEbnM4Lbvs+7k6r8Svbfot++6usLour2Mu79C7uPosOnGFu3v7oPhyO227IC9tBS9wu237pjtnuG1urEQ4J+85ejnuLvsmeC9RuuS6+DrmeuC6tO8uxi8sLq1Qu/B6LHo5O6BvZHolrqFEuyVvbXsxr2B6rLrv+uRGQ=="
  },
  {
    "id": "match_1",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: مفاهيم العتاد والفيزياء",
    "typeTag": "Matching Challenge",
    "typeTagAr": "توصيل المفاهيم",
    "modeCategory": "matching",
    "points": 20,
    "penalty": 8,
    "questionEn": "Pair each Lesson 1-1 hardware milestone with its precise engineering definition:",
    "questionAr": "صل كل مفهوم من مفاهيم عتاد الحوسبة في الدرس 1-1 بتعريفه الهندسي الدقيق:",
    "terms": [
      {
        "id": "t_0",
        "en": "Moore's Law",
        "ar": "قانون مور"
      },
      {
        "id": "t_1",
        "en": "Quantum Tunneling",
        "ar": "النفق الكمي (Quantum Tunneling)"
      },
      {
        "id": "t_2",
        "en": "Edge Computing",
        "ar": "الحوسبة الطرفية (Edge Computing)"
      }
    ],
    "defs": [
      {
        "id": "d_0",
        "en": "Transistor density on integrated circuits doubles approximately every two years.",
        "ar": "تضاعف كثافة الترانزستورات على الدوائر المتكاملة كل سنتين تقريباً."
      },
      {
        "id": "d_1",
        "en": "Electrons leak through ultra-thin barriers, destabilizing binary 0/1 logic gates.",
        "ar": "تسرب الإلكترونات عبر الحواجز متناهية الصغر، مما يزعزع إشارات 0 و 1 الثنائية."
      },
      {
        "id": "d_2",
        "en": "Processing sensor data locally on the device to achieve ultra-low response latency.",
        "ar": "معالجة بيانات الحساسات محلياً على الجهاز لتقليل زمن الاستجابة إلى أدنى حد."
      }
    ],
    "pairHashes": [
      "06c089b6b7492048917aeada80ee240e417075f4ac122ca68093d7098eb04ed9",
      "0e97425a7a39e762ae92cf6a4c51e655abe8114554c2f7b45f7af11d4aaf1f3e",
      "e557e078018326bd7095d5c97460db9c4b2cf4f9456cb4691839ef889293f447"
    ],
    "encExplanationEn": "eQwLSlAWShMtUxFBVEJQV1VFF1xXX01fVVpMEBRfWANEEgdQWwpbUVgYYhZXV0UQWhVjQlddAwldXVZEXQdUWloGFxhURVZeCFFGEVtOSlpTV1sRWlhVUEBKA0UjUlEBRCILXEcWQV8NXxMQWVVHAEQVW1ZNVggGTRNXC0tCQFZVD0lMXFxcExJLFRVWWkod",
    "encExplanationAr": "7eG8n+y34Lu4tEa4tu6x64EW7rvuhOG4FOCwvczvvLzVuc0R78ntgbqw69IW4Za8s+2G7rvrwb2S6rO8okLqlO3nvb7ssOCxQerBuLfuuuq1770R77vglOyW4MpG7pG94Lnd6ZC7k+/hGOvE773p1e+E7r0Z6uK9nuuEvIO7uOuFQ7yf7LXhmbmDvsbqseGB6IXvm++54Ijsohi9we+yvMm47OmEu53uyhjrxO+96dLvhO624Lm+zBTrm7yAupXqsLvIGOy04Ye4sb/l654Z65fvs+mc6ZvhmuCyvdcW7+W960TpkLqx7sDhtbuO4LS9nhXvkOC3vsjtuejs4Ojqmho=",
    "compositeKey": "4cd85193a2fa379306716189498ef66ddad17c56c83c691e757793fe431d9b23"
  },
  {
    "id": "match_2",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: عناصر الخلية العصبية",
    "typeTag": "Matching Challenge",
    "typeTagAr": "توصيل المفاهيم",
    "modeCategory": "matching",
    "points": 20,
    "penalty": 8,
    "questionEn": "Pair each Artificial Neural Network component with its exact mathematical role:",
    "questionAr": "صل كل مكون من مكونات الخلية العصبية الاصطناعية بوظيفته الرياضية المحددة:",
    "terms": [
      {
        "id": "t_0",
        "en": "Synaptic Weight (W)",
        "ar": "الوزن المشبكي (Weight)"
      },
      {
        "id": "t_1",
        "en": "Additive Bias (b)",
        "ar": "الانحياز (Bias)"
      },
      {
        "id": "t_2",
        "en": "Activation Function",
        "ar": "دالة التنشيط (Activation)"
      }
    ],
    "defs": [
      {
        "id": "d_0",
        "en": "Multiplier that scales the relative strength and influence of an incoming input signal.",
        "ar": "معامل ضرب يحدد الأهمية النسبية وقوة الإشارة المدخلة إلى الخلية."
      },
      {
        "id": "d_1",
        "en": "Offset value shifting the total summation curve to control the firing threshold.",
        "ar": "قيمة إزاحة ثابتة تُضاف لتعديل عتبة إطلاق الخلية العصبية."
      },
      {
        "id": "d_2",
        "en": "Non-linear transform preventing the neural network from behaving like a single linear regression.",
        "ar": "تحويل لاخطي يمنع الشبكة العميقة من الانهيار إلى مجرد معادلة خطية بسيطة."
      }
    ],
    "pairHashes": [
      "332b2abc1f96222b05f4bf66acfd0fda46e4e57c3ce127582ae35e7fee029901",
      "43c558decdc4468fe51da2fc86a6b96e9ba574d933347eb1ee607ab6051d8279",
      "953a631d5cafa02a1fefaa761c598bc39b48a069924681fb054619ce93416417"
    ],
    "encExplanationEn": "MgFbAwtFQUJSUl1bVkRYRFcRDwtTX0FUWFUGHhV2D1NGQlECXQ9SQVVCAUsVS1QPEQoXXUFeQBpJEFMKBRFxWhENRAUXWF0MEVVEXFdCUF9cQkYQW19bUl0WDV1bGQpbWwdTEREWQlxWWgFVGEteDRQKDVMXVFUTBFJbCAhFWVwWSg==",
    "encExplanationAr": "vcPr4LuS6+rpgemV7bAZ6Jjpy72a65sR77S6uu2dRuqSu7a7m76T65/v7uCE4L1Bu+u7k+6z7MS8turJuLvonr3WEr3p6YS6meuGEuyb4YPqlr7W7LnsmBbuxOux7Mjrsbu4u5hG6bftsryd7Y/o5brEurbvuxS67eidvMbotOHMROrDurXqyOi16YbtvOGHEunMvLDqsumbFruV7LC+hu3K6+DpzxDrk+/g4bfgnrnTu8oU747t57y5ErzL6Yng4b23RLuW6+bpkOi07bPhl+qGRr2P6r7phxa7leywvpzt1evp6c8e",
    "compositeKey": "ed2dc12b1312469021fe534166c254f25b2c1f0346d8581abcc4774ce02da109"
  },
  {
    "id": "match_3",
    "lesson": "Lesson 1-3",
    "lessonAr": "الدرس 1-3: تقنيات الذكاء في الصناعة",
    "typeTag": "Matching Challenge",
    "typeTagAr": "توصيل المفاهيم",
    "modeCategory": "matching",
    "points": 20,
    "penalty": 8,
    "questionEn": "Pair each recommendation & analytics term with its foundational definition:",
    "questionAr": "صل كل مصطلح من مصطلحات التوصية والتحليل الصناعي بتعريفه الأساسي:",
    "terms": [
      {
        "id": "t_0",
        "en": "Content-Based Filtering",
        "ar": "التصفية المعتمدة على المحتوى"
      },
      {
        "id": "t_1",
        "en": "Cosine Similarity",
        "ar": "تشابه جيب التمام (Cosine)"
      },
      {
        "id": "t_2",
        "en": "Cold Start Problem",
        "ar": "مشكلة البداية الباردة (Cold Start)"
      }
    ],
    "defs": [
      {
        "id": "d_0",
        "en": "Recommends items possessing metadata and features matching user's past catalog likes.",
        "ar": "ترشيح عناصر تمتلك سمات وخصائص مشابهة لما نال إعجاب المستخدم في الماضي."
      },
      {
        "id": "d_1",
        "en": "Calculates the metric angle between multidimensional preference vectors.",
        "ar": "حساب الزاوية الاتجاهية بين متجهات التفضيل في الفضاء متعدد الأبعاد."
      },
      {
        "id": "d_2",
        "en": "Difficulty generating reliable recommendations when historical interaction logs are empty.",
        "ar": "عجز النظام عن تقديم ترشيحات دقيقة لمستخدم جديد أو عنصر حديث يفتقر للسجلات."
      }
    ],
    "pairHashes": [
      "2a87d67e10693f045aedfa95e4c1a3fe1cbcd4f21185c5a8133c0fa94c68ae8c",
      "3bc0d2d15c9ef0da1bc6478e968303f4e83b14961d468dd45fe7ff6c9ab27d40",
      "798560827244b736b15b7af295143e94eb844fac1e634bbdd538ca45416061e0"
    ],
    "encExplanationEn": "IFpYTAZfFxwBBUYDAkVRXkMWB1ZBR0EKTF0LQV9WV0VMRwNEDBUiDRJaXQQWAUVZVBZXR1dGF0FQUBZfEBIHWApSWFUGXxcKQydaCgJFa0RRFBYVVFAFEV1LFQRKE0xUS1pLX15GFQ0TShMEWBBaTFEGRR0=",
    "encExplanationAr": "u5LvvLubu4S65ezsvswY6Ji+xeyx7eS7leDMuLHqvxHhn7+275i510HrgLizvJTgkkPulOux747stbqFuoO+r0PtnODX6cTpy72yRr7J4brozkLtku3lu5Lh47me6rMR4L+/te6/udFB64G5kb274bK7nxPqku6z7Zm6hLqVvpy6su6jQ+jr6cS9sb7OvZfol7/o7ZwUucThvL7J4ZTugOGavp4X7cu62OuUuLK8nxjh5e6c6oTvnhXrxenm6s7t6e2R4eXpxOnJRO3Bv+Hgk+nuu7HsvrnKFg==",
    "compositeKey": "c568c1c1cd5ffe800fb554ac88fa936195f775aba33a6d388c63257753b0b2f4"
  },
  {
    "id": "match_4",
    "lesson": "Lesson 1-4",
    "lessonAr": "الدرس 1-4: أخلاقيات الذكاء الاصطناعي",
    "typeTag": "Matching Challenge",
    "typeTagAr": "توصيل المفاهيم",
    "modeCategory": "matching",
    "points": 20,
    "penalty": 8,
    "questionEn": "Pair each AI Ethics principle with its recognized governance requirement:",
    "questionAr": "صل كل مبدأ من مبادئ أخلاقيات الذكاء الاصطناعي بمتطلبه التنظيمي المعتمد:",
    "terms": [
      {
        "id": "t_0",
        "en": "Algorithmic Fairness",
        "ar": "العدالة الخوارزمية (Fairness)"
      },
      {
        "id": "t_1",
        "en": "Transparency & XAI",
        "ar": "الشفافية والتفسير (Transparency)"
      },
      {
        "id": "t_2",
        "en": "Data Privacy",
        "ar": "حماية الخصوصية (Privacy)"
      }
    ],
    "defs": [
      {
        "id": "d_0",
        "en": "Preventing biased decisions against protected demographic groups and minority classes.",
        "ar": "منع القرارات التمييزية المتحيزة ضد الفئات المجتمعية المحمية والأقليات."
      },
      {
        "id": "d_1",
        "en": "Providing understandable explanations of how Black-Box automated conclusions were derived.",
        "ar": "توفير تفسيرات واضحة ومفهومة لكيفية وصول النموذج لاتخاذ القرار الآلي."
      },
      {
        "id": "d_2",
        "en": "Securing personal identifiable information and strictly respecting explicit user consent.",
        "ar": "تأمين البيانات الشخصية والالتزام بموافقة المستخدم الصريحة في المعالجة."
      }
    ],
    "pairHashes": [
      "725e549f237b3c1a0b3c6a5b5efab5743cd5ba22e7eadf50adb532972d6969e9",
      "9cff84e98ec158e5a83e722d92d8c56adaa4183e45db72120d5634c3e64b3ead",
      "e47b79797adba0f1de020f65a62051f97e5ff20167b550cfd2106e0431decaa9"
    ],
    "encExplanationEn": "dFJcSwxcFUMUQlhVBwIQWBFUERQDU1UNXkBBRlRbQFQXWgxZW1JMWVZaDhdgRlYKRkhZEFMIWk4VAgdbGxBAClRaUEpCXQNTXUJQXAwWXhkzQgtCA1dNREBBWhJVUUdERUMEQkZcVlFVFFRCQFtZC1hBFg==",
    "encExplanationAr": "6pTsvbqAvp/sluC3usxF4cnp4O3oFO3h6bUVvpfrt+/P6uTpv+qy6IvsrhftvO/D7Lzg1u/n4ZDs57u8usoUu5jrh+Do4OIQ7IvgtrvtvY9D6MXt5u22vIHrkr6B6pTvzxO5l+y34bXhjey17Jvvze2jGLu+vp7usb7M7te6vLuH6r/hyxm+muyE4Lu740Xhzung7erttkTolOzi6JHqtr2CuZftnBjpuO2/F+yc7u7tn+Hk7sHhnezhu7NCu5O6tuuB4czh0+m+6ZAd",
    "compositeKey": "2359b9f04193bee9c0b4b44d035f0237e3a053809457447d588b6f975fb6bc4c"
  },
  {
    "id": "order_1",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: هرمية الذكاء الاصطناعي",
    "typeTag": "Hierarchy Sorter",
    "typeTagAr": "ترتيب هرمي",
    "modeCategory": "ordering",
    "points": 25,
    "penalty": 10,
    "questionEn": "Arrange the AI Nested Hierarchy from the broadest discipline (Top / 1) down to the most specialized subset (Bottom / 4):",
    "questionAr": "رتب تصنيف مجالات الذكاء الاصطناعي المتداخلة من المجال الأشمل والأعم (في الأعلى / 1) إلى التخصص الأكثر دقة (في الأسفل / 4):",
    "items": [
      {
        "en": "Artificial Intelligence (AI) - Broad discipline of smart machines",
        "ar": "1. الذكاء الاصطناعي (AI) - المجال الأوسع للآلات الذكية"
      },
      {
        "en": "Machine Learning (ML) - Learning patterns from data without explicit rules",
        "ar": "2. تعلم الآلة (ML) - استخلاص الأنماط من البيانات دون برمجة صريحة"
      },
      {
        "en": "Deep Learning (DL) - Multi-layered Artificial Neural Networks",
        "ar": "3. التعلم العميق (DL) - الشبكات العصبية الاصطناعية متعددة الطبقات"
      },
      {
        "en": "Generative AI (GenAI) - Synthesizing novel text, media, and code",
        "ar": "4. الذكاء الاصطناعي التوليدي (GenAI) - ابتكار وتوليد محتوى جديد"
      }
    ],
    "sequenceHash": "0b2a8cf0044103a3174f588d47c24078e4f379ad27ec4fa31c14a0e7b384964e",
    "encExplanationEn": "cSsSBFYACV1AVUdCVUBBflBUXA9bXRgoUVYRXF1eUBRFQw5aVFFBB11ZEQJdCBITdQZUREF8AFYQXVFaXhoUElgLUQkYEwlHVUZHEV1cBVZDWRQhUFZdFlVDCkRREHZxRVkJV1JVEko=",
    "encExplanationAr": "6MXr5eHkvoHpse276JpB65busL6A4JW9vu/O6p0KF+DC7eLrh+DivJXvxEPswbi36cTpgbmHvLG6lOCN4LwUvLe7ukHgxL+06bHsiem3uZoR75O/seCMvJPu5uuw6J4YWxS/ue+Tud3rs7zmFL7G6rW7k+3l6MwXupzgk+GY7eHp5RJfGLrs6bbsm+mB680T6ZDt4u2S4N3ts7q3FOiQ4eHs3+qy4Ou9sBe84O3nuYLp2hHt5OjP7uDrl+28FgpF6ejqy+HrvpwQ7JPotOvR6rLvk76UGODD7bO7mO247ry8vr6c7rNBvJju4bq3RrmU6OfpnriyvLG7ueCT4Zwa"
  },
  {
    "id": "order_2",
    "lesson": "Lesson 1-2",
    "lessonAr": "الدرس 1-2: مسار معالجة الشبكة العصبية",
    "typeTag": "Flow Sorter",
    "typeTagAr": "ترتيب مسار التدفق",
    "modeCategory": "ordering",
    "points": 20,
    "penalty": 8,
    "questionEn": "Arrange the sequential flow of data as it passes through an Artificial Neural Network architecture:",
    "questionAr": "رتب المسار التسلسلي لتدفق البيانات أثناء معالجتها داخل بنية الشبكة العصبية الاصطناعية من البداية حتى النهاية:",
    "items": [
      {
        "en": "Input Layer: Ingests raw multidimensional numeric features",
        "ar": "1. طبقة الإدخال (Input Layer): استقبال ميزات البيانات الرقمية الخام"
      },
      {
        "en": "Hidden Layer(s): Applies synaptic weights, biases, and non-linear activations",
        "ar": "2. الطبقة (الطبقات) المخفية: تطبيق الأوزان، الانحياز، والدوال اللاخطية"
      },
      {
        "en": "Output Layer: Synthesizes final classifications, probabilities, or predictions",
        "ar": "3. طبقة الإخراج (Output Layer): إنتاج مخرجات التصنيف النهائي أو الاحتمالات"
      }
    ],
    "sequenceHash": "1ea1fe65324927be37c1c12845559d236a5a459682e391d55b7c822e4a8efe93",
    "encExplanationEn": "eAsHXhQIV0FaXVoZVFsNEkAXBV4RRlNKUA8VR1gTElpYEUAVFFNcU1xBRVpXRQsVXQtTB11cEgNRAEwQFAAZR0MED0IACkRYUkZdVlwXDgRKUhFCTxFRTVhYXFtYEFtdUUFcDxRTUFhZXkVcTEUUQEFCRxFdVlsGQAhXCxVL",
    "encExplanationAr": "6OC5gr7C7oQT6pPgtu/IvZzu4ujhCxLgnu2d7Za8kRPuxuzl7J3gvOCVvLXhlryfFbqfu5/rtr2buZa87ry9E+ncuZm+1BbthOqc4LDvy0XrkLq1u5Tql+yb7ZLg4Oq/FrmeuLEV4Zzhvb2K4Za9se3OF7qw6pi8u7mLvcy9l+uAvc0Rv+Dvv+uA7J7qnbvi65BD6OLouBjskuyx4dPqm+/j7cbsnxnun+vh6rzpyuy0u727keq+Re3l4M++y+GC6clB6cG8suy16p7guO/OvZoXu5a6teu+7bLtkuHC67nuyBW5je2R7okSvYThmb237csXu5/rtr2RuZa9172e651L"
  },
  {
    "id": "order_3",
    "lesson": "Lesson 1-1",
    "lessonAr": "الدرس 1-1: أجيال الحوسبة التاريخية",
    "typeTag": "Timeline Sorter",
    "typeTagAr": "ترتيب زمني",
    "modeCategory": "ordering",
    "points": 20,
    "penalty": 8,
    "questionEn": "Chronologically sequence the key physical technological hardware revolutions from oldest to newest:",
    "questionAr": "رتب زمنياً الثورات التقنية لعتاد الحواسيب من الأقدم ظهوراً إلى الأحدث:",
    "items": [
      {
        "en": "Vacuum Tubes (1940s ENIAC Era)",
        "ar": "1. الصمامات الإلكترونية المفرغة (حقبة إينياك في الأربعينيات)"
      },
      {
        "en": "Discrete Solid-State Transistors (Late 1950s)",
        "ar": "2. الترانزستورات المنفصلة شبه الموصلة (أواخر الخمسينيات)"
      },
      {
        "en": "Integrated Circuits / ICs (1960s Silicon Chips)",
        "ar": "3. الدوائر المتكاملة (Integrated Circuits في الستينيات)"
      },
      {
        "en": "Microprocessors & VLSI (1970s Single-Chip CPUs)",
        "ar": "4. المعالجات الدقيقة والدمج فائق الكثافة (السبعينيات فصاعداً)"
      }
    ],
    "sequenceHash": "1f98092af578c2770abf94f0a945710e5e26016102762c6592eeddf631f9bb1a",
    "encExplanationEn": "eQdLXEdYQARGRUVXBEBSREMEBkZfRgldQV9GVFBYXAAVE1NVRURbEURHVVNBQ0JaGVYMFgcWA0JWERJLAwxCCEISVkpDFRIVDlBZGApcQ1JXEwMSXFBGUwhLV0BeRUNJFQRcUhBXX19RXltPEhBfW15eAEgHDA9GE1wPWhANQRNeBVxLQ1ZAEkg=",
    "encExplanationAr": "6czhj+mx6tBG7ZDh5+qO75q5xb6WFL6auZ7shO676Mvs7+qR6boMEeiV7rLq1u+w4ZW84LzDvpwT6cHg5ru0uLC+iOCK4ZtBvpLuvLuA75voxrrK4L6+mUHhl+y/6LS9kry5Fg4R7prptxfulbqy7ZPq1L3DveDugenV4ci7ubmAvp7gmhnqxr+x7rm7g++Y6eu6zxkKRujK4LEV75bp4e3K677olu6X6IMX7pW6suy86s+857zB77bo4uHLQg9B6O7hjemx6+W+ku6zQ+qS7rS460bhk7+0uLzsjO+W6eHtyeqR6JsW6Zfrs+6durTss+vnvc1EvpHqtb6Uus3o6+nN4ZEe"
  },
  {
    "id": "order_4",
    "lesson": "Lesson 1-4",
    "lessonAr": "الدرس 1-4: الأعمدة الأخلاقية الأربعة",
    "typeTag": "Principles Sorter",
    "typeTagAr": "ترتيب المبادئ",
    "modeCategory": "ordering",
    "points": 20,
    "penalty": 8,
    "questionEn": "Sequence the Four Ethical Pillars of Responsible AI according to the formal curriculum framework:",
    "questionAr": "رتب المبادئ الأخلاقية الأربعة الحاكمة للذكاء الاصطناعي وفق إطار المنهج المعتمد:",
    "items": [
      {
        "en": "Fairness: Preventing unjust discrimination and demographic bias",
        "ar": "1. العدالة (Fairness): تجنب التمييز المجحف والتحيز في البيانات"
      },
      {
        "en": "Transparency: Clarifying system limitations and operational logic",
        "ar": "2. الشفافية (Transparency): الإفصاح عن آلية العمل والحدود الفنية"
      },
      {
        "en": "Privacy Protection: Safeguarding user records with strict consent",
        "ar": "3. حماية الخصوصية (Privacy): تأمين بيانات المستخدمين واحترام موافقتهم"
      },
      {
        "en": "Accountability: Establishing legal liabilities for consequences",
        "ar": "4. المساءلة (Accountability): تحديد المسؤولية القانونية عن النتائج"
      }
    ],
    "sequenceHash": "bcb5be93be45aebefb29dbc04b42843ec71df8bc41c4d98f646af2f5c644095a",
    "encExplanationEn": "NgsHFQQKTEFCFV1ZDQQQFkYRRksRARdFRgcUQF1HQwoNRFgGCl1CIn0RBFsSXEoIV1pVBFwSIFQKRFpRQ0oZQTYRA1sRFVhBBwtXTE1FMhcPFFNaHU5DUVoGFHNbV1wQDUNQBg9UCxdNHw==",
    "encExplanationAr": "usS7sbvg4Zu6wuyaucNCvcG7tuHHutLonLqN6pEU68K6s+jhvoG6ye20u5u8kBi/su2yucXqyOzn7pPtsuC/ucW7yA9CvZ7q5r2N7c69xbziupsZvMG6uO3m7JXhv+vpQ++bveLh6Lqz6cQUvJ7h4u6A7+C+lb+0urzsnei1FbnJuucVusjgtrrC7b+5zEK9wbu24cq61um8uoHrsuyave8X6Oy+m7rN7bu7hbye4e0W7JG44uvj7dDuk+yR4LG5y0O6krvh4LG6wu2zuO2747/o6pBEu+vok7uw673sn73J7rS83+Hou50f"
  }
];

  const LEVEL_THRESHOLDS = [
    { lvl: 1, nameEn: "Novice Explorer", nameAr: "مستكشف مبتدئ", minXp: 0, maxXp: 60 },
    { lvl: 2, nameEn: "Apprentice Analyst", nameAr: "محلل متدرب", minXp: 60, maxXp: 140 },
    { lvl: 3, nameEn: "Certified Engineer", nameAr: "مهندس معتمد", minXp: 140, maxXp: 240 },
    { lvl: 4, nameEn: "Senior Architect", nameAr: "معماري نظم متقدم", minXp: 240, maxXp: 380 },
    { lvl: 5, nameEn: "AI Grandmaster", nameAr: "خبير الذكاء الاصطناعي الأكبر", minXp: 380, maxXp: 99999 }
  ];

  // ==========================================
  // 2. CRYPTO & DECRYPTION HELPERS
  // ==========================================
  async function computeSha256(str) {
    const enc = new TextEncoder().encode(str);
    const hashBuf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(hashBuf))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  function normalize(str) {
    return (str || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function xorDecrypt(base64Str, keyHex) {
    try {
      const binary = atob(base64Str);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const keyBytes = new TextEncoder().encode(keyHex);
      const out = new Uint8Array(bytes.length);
      for (let i = 0; i < bytes.length; i++) {
        out[i] = bytes[i] ^ keyBytes[i % keyBytes.length];
      }
      return new TextDecoder('utf-8').decode(out);
    } catch (e) {
      return "(Decryption Error)";
    }
  }

  // ==========================================
  // 3. SOUND SYNTHESIZER (WEB AUDIO API)
  // ==========================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = localStorage.getItem('bak_muted') === 'true';
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      localStorage.setItem('bak_muted', this.isMuted);
      return this.isMuted;
    }

    playTone(freq, type, duration, startTime = 0, gainLevel = 0.15) {
      if (this.isMuted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);
        gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration);
      } catch (err) {}
    }

    click() {
      this.playTone(800, 'triangle', 0.05, 0, 0.08);
    }

    correct() {
      this.playTone(523.25, 'sine', 0.15, 0, 0.15); // C5
      this.playTone(659.25, 'sine', 0.18, 0.08, 0.18); // E5
      this.playTone(783.99, 'sine', 0.28, 0.16, 0.22); // G5
    }

    wrong() {
      this.playTone(280, 'sawtooth', 0.15, 0, 0.2);
      this.playTone(196, 'sawtooth', 0.25, 0.1, 0.2);
    }

    victory() {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        this.playTone(freq, 'sine', 0.35, idx * 0.12, 0.2);
      });
    }
  }

  const sound = new SoundEngine();

  // ==========================================
  // 4. ANTI-CHEAT & INTEGRITY SHIELD
  // ==========================================
  let infractionCount = 0;

  function showAntiCheatToast(msgEn, msgAr) {
    const toast = document.getElementById('antiCheatToast');
    const msgEl = document.getElementById('antiCheatToastMsg');
    if (!toast || !msgEl) return;
    const isAr = currentLang === 'ar';
    msgEl.innerText = isAr ? msgAr : msgEn;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function initAntiCheat() {
    // 1. Disable Right Click Context Menu
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      showAntiCheatToast(
        "🔒 Right-click disabled for assessment integrity.",
        "🔒 تم تعطيل النقر بزر الفأرة الأيمن لضمان نزاهة الاختبار."
      );
    });

    // 2. Block DevTools & Source Inspect Shortcuts
    window.addEventListener('keydown', (e) => {
      const isInspectKey = 
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase())) ||
        (e.metaKey && e.altKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ['U', 'S', 'P'].includes(e.key.toUpperCase())) ||
        (e.metaKey && ['U', 'S', 'P'].includes(e.key.toUpperCase()));

      if (isInspectKey) {
        e.preventDefault();
        e.stopPropagation();
        showAntiCheatToast(
          "⚠️ Developer tools shortcut blocked.",
          "⚠️ تم حظر اختصارات فحص الشفرة وأدوات المطورين."
        );
      }
    });

    // 3. Prevent Copy / Cut on Question Elements
    const qCard = document.getElementById('questionCard');
    if (qCard) {
      ['copy', 'cut'].forEach(evt => {
        qCard.addEventListener(evt, (e) => {
          e.preventDefault();
          showAntiCheatToast(
            "⚠️ Copying question content is restricted.",
            "⚠️ نسخ نصوص أسئلة الاختبار محظور لمنع التداول."
          );
        });
      });
    }

    // 4. Focus Loss / Tab Switching Monitoring
    const handleFocusLoss = () => {
      if (isQuizActive && !isAnswerLocked) {
        infractionCount++;
        showAntiCheatToast(
          `⚠️ Warning: Window lost focus! Tab switch recorded (${infractionCount} infraction${infractionCount > 1 ? 's' : ''}).`,
          `⚠️ تحذير: مغادرة نافذة الاختبار مسجلة (${infractionCount} مخالفة).`
        );
      }
    };
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') handleFocusLoss();
    });
    window.addEventListener('blur', handleFocusLoss);

    // 5. Console Integrity Notice
    try {
      console.log(
        '%c⛔ EXAM INTEGRITY ACTIVE %c\nInspecting code or attempting memory tampering is strictly monitored.\nAll answers are hashed cryptographically with per-question salts.',
        'background: #dc2626; color: white; font-weight: bold; font-size: 16px; padding: 4px 8px; border-radius: 4px;',
        'color: #94a3b8; font-size: 12px;'
      );
    } catch(e) {}
  }

  // ==========================================
  // 5. APPLICATION STATE
  // ==========================================
  let currentLang = localStorage.getItem('bak_lang') || 'en';
  let selectedMode = 'mixed'; // 'mixed' | 'mcq' | 'matching' | 'ordering' | 'speedrun'
  let activeQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let lives = 3;
  let correctCount = 0;
  let isAnswerLocked = false;
  let isQuizActive = false;

  // Matching Specific State
  let selectedMatchTerm = null;
  let selectedMatchDef = null;
  let activePairMatchesRemaining = 0;

  // Ordering Specific State
  let currentSequenceOrder = [];

  // Speedrun Countdown State
  let speedrunTimer = null;
  let speedrunTimeRemaining = 45;

  // Lesson Performance Tracking
  const lessonStats = {
    "Lesson 1-1": { total: 0, correct: 0, nameAr: "الدرس 1-1: عتاد الحوسبة وقانون مور" },
    "Lesson 1-2": { total: 0, correct: 0, nameAr: "الدرس 1-2: الشبكات العصبية والذكاء الاصطناعي" },
    "Lesson 1-3": { total: 0, correct: 0, nameAr: "الدرس 1-3: نظم التوصية والتحليل الصناعي" },
    "Lesson 1-4": { total: 0, correct: 0, nameAr: "الدرس 1-4: أخلاقيات الذكاء الاصطناعي والشفافية" }
  };

  // ==========================================
  // 6. DUPLICATE PREVENTION & SHUFFLING
  // ==========================================
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /**
   * Prepares a session question list with ZERO repetitions.
   * Tracks seen questions across sessions in sessionStorage so subsequent
   * rounds test fresh questions before recycling.
   */
  function buildSessionQuestionList(mode) {
    let pool = [];
    if (mode === 'mixed' || mode === 'speedrun') {
      pool = [...SECURE_QUESTIONS];
    } else {
      pool = SECURE_QUESTIONS.filter(q => q.modeCategory === mode);
    }

    // Retrieve seen questions
    let seen = [];
    try {
      seen = JSON.parse(sessionStorage.getItem('bak_seen_ids') || '[]');
    } catch(e) { seen = []; }

    let unseen = pool.filter(q => !seen.includes(q.id));
    if (unseen.length < 5) {
      // Reset seen if exhausted
      seen = [];
      unseen = [...pool];
      sessionStorage.setItem('bak_seen_ids', JSON.stringify([]));
    }

    // Target count per test: 12 questions (or full pool if smaller)
    const targetCount = Math.min(12, pool.length);
    const shuffledUnseen = shuffleArray(unseen);
    const selected = shuffledUnseen.slice(0, targetCount);

    // Save to seen
    const updatedSeen = [...new Set([...seen, ...selected.map(q => q.id)])];
    try {
      sessionStorage.setItem('bak_seen_ids', JSON.stringify(updatedSeen));
    } catch(e) {}

    // Deep shuffle each question's internal choices so Option positions (A, B, C, D) are completely random
    return selected.map(q => {
      const item = { ...q };
      if (item.options) {
        item.options = shuffleArray(item.options);
      }
      if (item.terms && item.defs) {
        item.shuffledTerms = shuffleArray(item.terms);
        item.shuffledDefs = shuffleArray(item.defs);
      }
      if (item.items) {
        // Ensure starting order is not already sorted!
        let scrambled = shuffleArray(item.items);
        while (scrambled.length > 2 && scrambled.every((it, idx) => it.en === item.items[idx].en)) {
          scrambled = shuffleArray(item.items);
        }
        item.shuffledItems = scrambled;
      }
      return item;
    });
  }

  // ==========================================
  // 7. UI & HUD UPDATER
  // ==========================================
  function updateHUD() {
    const isAr = currentLang === 'ar';
    document.getElementById('scoreBadge').innerText = score;
    document.getElementById('streakBadge').innerText = streak;

    // Lives
    const livesContainer = document.getElementById('livesContainer');
    livesContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      if (i < lives) {
        livesContainer.innerHTML += '<i class="fa-solid fa-heart text-rose-500 animate-pulse"></i>';
      } else {
        livesContainer.innerHTML += '<i class="fa-regular fa-heart text-slate-600"></i>';
      }
    }

    // Level
    const lvlObj = LEVEL_THRESHOLDS.slice().reverse().find(t => score >= t.minXp) || LEVEL_THRESHOLDS[0];
    document.getElementById('levelBadge').innerText = `Lvl ${lvlObj.lvl} • ${isAr ? lvlObj.nameAr : lvlObj.nameEn}`;

    // Progress Bar
    let pct = 100;
    if (lvlObj.lvl < 5) {
      const span = lvlObj.maxXp - lvlObj.minXp;
      const cur = Math.max(0, score - lvlObj.minXp);
      pct = Math.min(100, Math.round((cur / span) * 100));
    }
    document.getElementById('levelProgress').style.width = `${pct}%`;
  }

  function spawnXpFloat(amount, isPositive) {
    const container = document.getElementById('questionCard');
    if (!container) return;
    const floatEl = document.createElement('div');
    floatEl.className = 'xp-delta-float';
    floatEl.style.top = '1.5rem';
    floatEl.style.right = currentLang === 'ar' ? 'auto' : '1.5rem';
    floatEl.style.left = currentLang === 'ar' ? '1.5rem' : 'auto';
    floatEl.style.color = isPositive ? '#10b981' : '#f43f5e';
    floatEl.innerText = (isPositive ? '+' : '') + amount + ' XP';
    container.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 1250);
  }

  // ==========================================
  // 8. ASSESSMENT LIFECYCLE
  // ==========================================
  function chooseMode(mode) {
    selectedMode = mode;
    sound.click();
    startAssessment();
  }

  function startAssessment() {
    activeQuestions = buildSessionQuestionList(selectedMode);
    currentIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    lives = 3;
    correctCount = 0;
    isAnswerLocked = false;
    isQuizActive = true;
    infractionCount = 0;

    // Reset lesson stats
    Object.keys(lessonStats).forEach(key => {
      lessonStats[key].total = 0;
      lessonStats[key].correct = 0;
    });

    // Populate total counts for active questions
    activeQuestions.forEach(q => {
      if (lessonStats[q.lesson]) {
        lessonStats[q.lesson].total++;
      }
    });

    updateHUD();

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('quizScreen').classList.add('flex');

    renderCurrentCard();
  }

  function returnToMenu() {
    sound.click();
    clearInterval(speedrunTimer);
    isQuizActive = false;
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');
    document.getElementById('startScreen').classList.add('flex');
  }

  // ==========================================
  // 9. QUESTION RENDERING ENGINE
  // ==========================================
  function renderCurrentCard() {
    isAnswerLocked = false;
    clearInterval(speedrunTimer);

    const q = activeQuestions[currentIndex];
    const isAr = currentLang === 'ar';

    document.getElementById('currentQuestionNum').innerText = currentIndex + 1;
    document.getElementById('totalQuestionsNum').innerText = activeQuestions.length;
    document.getElementById('questionCategoryBadge').innerText = isAr ? q.lessonAr : q.lesson;
    document.getElementById('qTypeBadge').innerText = isAr ? q.typeTagAr : q.typeTag;
    
    const valText = isAr 
      ? `+${q.points} نقطة خبرة (الخطأ: -${q.penalty})`
      : `+${q.points} XP (Mistake: -${q.penalty})`;
    document.getElementById('questionValueBadge').innerText = valText;

    document.getElementById('questionText').innerText = isAr ? q.questionAr : q.questionEn;

    // Render Speedrun Timer if in speedrun mode
    const speedrunBarContainer = document.getElementById('speedrunBarContainer');
    if (selectedMode === 'speedrun') {
      speedrunBarContainer.classList.remove('hidden');
      startSpeedrunCountdown(q);
    } else {
      speedrunBarContainer.classList.add('hidden');
    }

    const dynamicBody = document.getElementById('dynamicBody');
    dynamicBody.innerHTML = '';

    // Reset Feedback Banner
    const fb = document.getElementById('feedbackBanner');
    fb.classList.add('hidden');

    // Dispatch by type
    if (q.options) {
      renderMCQ(q, dynamicBody);
    } else if (q.terms && q.defs) {
      renderMatching(q, dynamicBody);
    } else if (q.items) {
      renderOrdering(q, dynamicBody);
    }
  }

  function startSpeedrunCountdown(q) {
    speedrunTimeRemaining = 45;
    const timerText = document.getElementById('speedrunTimerText');
    const timerBar = document.getElementById('speedrunTimerProgress');
    timerText.innerText = `${speedrunTimeRemaining}s`;
    timerBar.style.width = '100%';

    speedrunTimer = setInterval(() => {
      speedrunTimeRemaining--;
      timerText.innerText = `${speedrunTimeRemaining}s`;
      const pct = (speedrunTimeRemaining / 45) * 100;
      timerBar.style.width = `${pct}%`;

      if (speedrunTimeRemaining <= 0) {
        clearInterval(speedrunTimer);
        if (!isAnswerLocked) {
          isAnswerLocked = true;
          sound.wrong();
          handleTimeoutPenalty(q);
        }
      }
    }, 1000);
  }

  async function handleTimeoutPenalty(q) {
    const isAr = currentLang === 'ar';
    score = Math.max(0, score - q.penalty);
    streak = 0;
    lives--;
    updateHUD();
    spawnXpFloat(-q.penalty, false);

    // Decrypt explanation
    let explText = "";
    if (q.answerHash) {
      explText = isAr ? xorDecrypt(q.encExplanationAr, q.answerHash) : xorDecrypt(q.encExplanationEn, q.answerHash);
    }

    const fb = document.getElementById('feedbackBanner');
    fb.className = 'mt-3 p-4 rounded-xl text-xs md:text-sm border border-rose-500/40 bg-rose-950/30 text-rose-300 pop-in block';
    document.getElementById('feedbackTitle').innerHTML = `
      <i class="fa-solid fa-clock text-rose-400"></i>
      ${isAr ? `انتهى الوقت! -${q.penalty} نقطة وفقدت محاولة` : `Time Expired! -${q.penalty} XP & 1 Life Lost`}
    `;
    document.getElementById('feedbackExplanation').innerText = explText;
    checkEndCondition();
  }

  // ------------------------------------------
  // MCQ FORMAT
  // ------------------------------------------
  function renderMCQ(q, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2.5';
    const letters = ['A', 'B', 'C', 'D'];
    const isAr = currentLang === 'ar';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.id = `opt-btn-${idx}`;
      btn.className = 'quiz-opt-btn w-full text-left p-3.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-100 flex items-center gap-3 text-sm font-medium';
      if (isAr) btn.style.textAlign = 'right';

      btn.innerHTML = `
        <span class="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs font-bold flex items-center justify-center border border-slate-700 shrink-0">${letters[idx] || (idx+1)}</span>
        <span class="flex-1 leading-relaxed">${isAr ? opt.ar : opt.en}</span>
      `;

      btn.onclick = () => submitMCQChoice(q, opt, idx);
      wrapper.appendChild(btn);
    });

    container.appendChild(wrapper);
  }

  async function submitMCQChoice(q, chosenOpt, chosenIdx) {
    if (isAnswerLocked) return;
    isAnswerLocked = true;
    clearInterval(speedrunTimer);

    // Compute cryptographic hash of chosen option
    const normalizedChosen = normalize(chosenOpt.en);
    const chosenHash = await computeSha256(q.id + '::' + SALT_PEPPER + '::' + normalizedChosen);
    const isCorrect = (chosenHash === q.answerHash);

    const isAr = currentLang === 'ar';
    const chosenBtn = document.getElementById(`opt-btn-${chosenIdx}`);

    // Disable all options
    q.options.forEach((_, i) => {
      const b = document.getElementById(`opt-btn-${i}`);
      if (b) b.disabled = true;
    });

    if (isCorrect) {
      sound.correct();
      chosenBtn.classList.add('bg-emerald-950/60', 'border-emerald-500', 'text-emerald-200');
      const decryptedExpl = isAr 
        ? xorDecrypt(q.encExplanationAr, chosenHash) 
        : xorDecrypt(q.encExplanationEn, chosenHash);
      awardSuccess(q, decryptedExpl);
    } else {
      sound.wrong();
      chosenBtn.classList.add('bg-rose-950/60', 'border-rose-500', 'text-rose-200', 'shake');

      // Identify correct option dynamically to reveal for learning
      for (let i = 0; i < q.options.length; i++) {
        const testHash = await computeSha256(q.id + '::' + SALT_PEPPER + '::' + normalize(q.options[i].en));
        if (testHash === q.answerHash) {
          const correctBtn = document.getElementById(`opt-btn-${i}`);
          if (correctBtn) {
            correctBtn.classList.add('bg-emerald-950/40', 'border-emerald-500', 'text-emerald-300');
          }
          break;
        }
      }

      const decryptedExpl = isAr 
        ? xorDecrypt(q.encExplanationAr, q.answerHash) 
        : xorDecrypt(q.encExplanationEn, q.answerHash);
      applyPenalty(q, decryptedExpl);
    }
  }

  // ------------------------------------------
  // MATCHING FORMAT
  // ------------------------------------------
  function renderMatching(q, container) {
    selectedMatchTerm = null;
    selectedMatchDef = null;
    activePairMatchesRemaining = q.terms.length;
    const isAr = currentLang === 'ar';

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';

    const termsCol = document.createElement('div');
    termsCol.className = 'flex flex-col gap-2.5';
    termsCol.innerHTML = `<span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">${isAr ? 'المصطلحات والمفاهيم' : 'Key Concepts'}</span>`;

    const defsCol = document.createElement('div');
    defsCol.className = 'flex flex-col gap-2.5';
    defsCol.innerHTML = `<span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">${isAr ? 'التعريفات الدقيقة' : 'Standard Definitions'}</span>`;

    q.shuffledTerms.forEach((termItem) => {
      const btn = document.createElement('button');
      btn.id = `match-term-${termItem.id}`;
      btn.className = 'w-full text-left p-3.5 rounded-xl border border-slate-700 bg-slate-900/90 text-sm font-bold text-slate-200 hover:border-indigo-500 transition duration-150';
      if (isAr) btn.style.textAlign = 'right';
      btn.innerText = isAr ? termItem.ar : termItem.en;
      btn.onclick = () => selectMatchingTerm(q, btn, termItem);
      termsCol.appendChild(btn);
    });

    q.shuffledDefs.forEach((defItem) => {
      const btn = document.createElement('button');
      btn.id = `match-def-${defItem.id}`;
      btn.className = 'w-full text-left p-3.5 rounded-xl border border-slate-700 bg-slate-900/70 text-xs text-slate-300 hover:border-indigo-500 transition duration-150 leading-relaxed';
      if (isAr) btn.style.textAlign = 'right';
      btn.innerText = isAr ? defItem.ar : defItem.en;
      btn.onclick = () => selectMatchingDef(q, btn, defItem);
      defsCol.appendChild(btn);
    });

    grid.appendChild(termsCol);
    grid.appendChild(defsCol);
    container.appendChild(grid);
  }

  function selectMatchingTerm(q, btn, termItem) {
    if (isAnswerLocked || btn.disabled) return;
    sound.click();
    if (selectedMatchTerm) {
      selectedMatchTerm.btn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-950/40');
    }
    selectedMatchTerm = { btn, item: termItem };
    btn.classList.add('ring-2', 'ring-indigo-400', 'bg-indigo-950/40');
    verifyMatchingSelection(q);
  }

  function selectMatchingDef(q, btn, defItem) {
    if (isAnswerLocked || btn.disabled) return;
    sound.click();
    if (selectedMatchDef) {
      selectedMatchDef.btn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-950/40');
    }
    selectedMatchDef = { btn, item: defItem };
    btn.classList.add('ring-2', 'ring-indigo-400', 'bg-indigo-950/40');
    verifyMatchingSelection(q);
  }

  async function verifyMatchingSelection(q) {
    if (!selectedMatchTerm || !selectedMatchDef) return;

    const termEn = selectedMatchTerm.item.en;
    const defEn = selectedMatchDef.item.en;

    const pairHash = await computeSha256(q.id + '::' + SALT_PEPPER + '::' + normalize(termEn) + '||' + normalize(defEn));
    const isPairValid = q.pairHashes.includes(pairHash);

    const isAr = currentLang === 'ar';

    if (isPairValid) {
      sound.playTone(600, 'sine', 0.1, 0, 0.12);
      selectedMatchTerm.btn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-950/40');
      selectedMatchDef.btn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-950/40');

      selectedMatchTerm.btn.classList.add('bg-emerald-950/60', 'border-emerald-500', 'text-emerald-200');
      selectedMatchDef.btn.classList.add('bg-emerald-950/60', 'border-emerald-500', 'text-emerald-200');

      selectedMatchTerm.btn.disabled = true;
      selectedMatchDef.btn.disabled = true;

      selectedMatchTerm = null;
      selectedMatchDef = null;
      activePairMatchesRemaining--;

      if (activePairMatchesRemaining === 0) {
        isAnswerLocked = true;
        clearInterval(speedrunTimer);
        sound.correct();
        const decryptedExpl = isAr 
          ? xorDecrypt(q.encExplanationAr, q.compositeKey) 
          : xorDecrypt(q.encExplanationEn, q.compositeKey);
        awardSuccess(q, decryptedExpl);
      }
    } else {
      // Mistake on mismatch
      isAnswerLocked = true;
      clearInterval(speedrunTimer);
      sound.wrong();

      selectedMatchTerm.btn.classList.add('shake', 'border-rose-500', 'bg-rose-950/50');
      selectedMatchDef.btn.classList.add('shake', 'border-rose-500', 'bg-rose-950/50');

      // Disable remaining
      q.terms.forEach(t => {
        const tb = document.getElementById(`match-term-${t.id}`);
        if (tb) tb.disabled = true;
      });
      q.defs.forEach(d => {
        const db = document.getElementById(`match-def-${d.id}`);
        if (db) db.disabled = true;
      });

      const decryptedExpl = isAr 
        ? xorDecrypt(q.encExplanationAr, q.compositeKey) 
        : xorDecrypt(q.encExplanationEn, q.compositeKey);
      applyPenalty(q, decryptedExpl);
    }
  }

  // ------------------------------------------
  // ORDERING FORMAT
  // ------------------------------------------
  function renderOrdering(q, container) {
    currentSequenceOrder = [...q.shuffledItems];
    const isAr = currentLang === 'ar';

    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2.5';
    wrapper.id = 'sequenceSlotsContainer';

    const renderSlots = () => {
      wrapper.innerHTML = '';
      currentSequenceOrder.forEach((item, i) => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-3.5 rounded-xl border border-slate-700 bg-slate-900/90 text-slate-100 transition';
        row.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-slate-800 text-indigo-300 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold shrink-0">${i + 1}</span>
            <span class="text-xs md:text-sm font-semibold">${isAr ? item.ar : item.en}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="window.bakMoveSeq(${i}, -1)" ${i === 0 || isAnswerLocked ? 'disabled class="opacity-20 text-slate-500 p-1.5"' : 'class="hover:bg-slate-800 text-slate-300 p-1.5 rounded transition"'}>
              <i class="fa-solid fa-arrow-up"></i>
            </button>
            <button onclick="window.bakMoveSeq(${i}, 1)" ${i === currentSequenceOrder.length - 1 || isAnswerLocked ? 'disabled class="opacity-20 text-slate-500 p-1.5"' : 'class="hover:bg-slate-800 text-slate-300 p-1.5 rounded transition"'}>
              <i class="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        `;
        wrapper.appendChild(row);
      });
    };

    window.bakMoveSeq = (idx, step) => {
      if (isAnswerLocked) return;
      sound.click();
      const target = idx + step;
      if (target < 0 || target >= currentSequenceOrder.length) return;
      const tmp = currentSequenceOrder[idx];
      currentSequenceOrder[idx] = currentSequenceOrder[target];
      currentSequenceOrder[target] = tmp;
      renderSlots();
    };

    renderSlots();
    container.appendChild(wrapper);

    // Submit Sequence Order Button
    const submitBtn = document.createElement('button');
    submitBtn.id = 'seqSubmitBtn';
    submitBtn.className = 'mt-3 w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold rounded-xl text-xs md:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30';
    submitBtn.innerHTML = `<i class="fa-solid fa-check-double"></i> ${isAr ? 'تأكيد الترتيب التسلسلي' : 'Verify Sequential Order'}`;
    submitBtn.onclick = () => submitSequenceOrder(q);
    container.appendChild(submitBtn);
  }

  async function submitSequenceOrder(q) {
    if (isAnswerLocked) return;
    isAnswerLocked = true;
    clearInterval(speedrunTimer);

    const isAr = currentLang === 'ar';
    const seqStr = currentSequenceOrder.map(it => normalize(it.en)).join('>>>');
    const computedHash = await computeSha256(q.id + '::' + SALT_PEPPER + '::' + seqStr);
    const isCorrect = (computedHash === q.sequenceHash);

    const submitBtn = document.getElementById('seqSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-40');
    }

    if (isCorrect) {
      sound.correct();
      const decryptedExpl = isAr 
        ? xorDecrypt(q.encExplanationAr, computedHash) 
        : xorDecrypt(q.encExplanationEn, computedHash);
      awardSuccess(q, decryptedExpl);
    } else {
      sound.wrong();
      const decryptedExpl = isAr 
        ? xorDecrypt(q.encExplanationAr, q.sequenceHash) 
        : xorDecrypt(q.encExplanationEn, q.sequenceHash);
      applyPenalty(q, decryptedExpl);
    }
  }

  // ==========================================
  // 10. REWARD & PENALTY ENGINE
  // ==========================================
  function awardSuccess(q, explanation) {
    correctCount++;
    streak++;
    if (streak > maxStreak) maxStreak = streak;

    if (lessonStats[q.lesson]) lessonStats[q.lesson].correct++;

    const streakBonus = Math.min(10, (streak - 1) * 2);
    const earned = q.points + streakBonus;
    score += earned;

    const isAr = currentLang === 'ar';
    const fb = document.getElementById('feedbackBanner');
    fb.className = 'mt-3 p-4 rounded-xl text-xs md:text-sm border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 pop-in block';
    
    document.getElementById('feedbackTitle').innerHTML = `
      <i class="fa-solid fa-circle-check text-emerald-400"></i>
      ${isAr ? `إجابة صحيحة! +${earned} نقطة خبرة ${streak > 1 ? `(سلسلة متتالية ${streak}x!)` : ''}` : `Correct! +${earned} XP earned ${streak > 1 ? `(${streak}x Streak!)` : ''}`}
    `;
    document.getElementById('feedbackExplanation').innerText = explanation;

    if (typeof confetti === 'function') {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
    }

    spawnXpFloat(earned, true);
    updateHUD();
    checkEndCondition();
  }

  function applyPenalty(q, explanation) {
    score = Math.max(0, score - q.penalty);
    streak = 0;
    lives--;

    const isAr = currentLang === 'ar';
    const fb = document.getElementById('feedbackBanner');
    fb.className = 'mt-3 p-4 rounded-xl text-xs md:text-sm border border-rose-500/40 bg-rose-950/30 text-rose-300 pop-in block';
    
    document.getElementById('feedbackTitle').innerHTML = `
      <i class="fa-solid fa-circle-xmark text-rose-400"></i>
      ${isAr ? `إجابة خاطئة: تم خصم -${q.penalty} نقطة وفقدت محاولة` : `Mistake Penalized: -${q.penalty} XP & 1 Life Lost`}
    `;
    document.getElementById('feedbackExplanation').innerText = explanation;

    spawnXpFloat(-q.penalty, false);
    updateHUD();
    checkEndCondition();
  }

  function checkEndCondition() {
    const nextBtn = document.getElementById('nextBtn');
    const isAr = currentLang === 'ar';
    if (lives <= 0) {
      nextBtn.innerHTML = `<span>${isAr ? 'عرض النتيجة النهائية' : 'View Final Result'}</span> <i class="fa-solid fa-skull"></i>`;
    } else if (currentIndex === activeQuestions.length - 1) {
      nextBtn.innerHTML = `<span>${isAr ? 'إنهاء التقييم' : 'Finish Assessment'}</span> <i class="fa-solid fa-flag-checkered"></i>`;
    } else {
      nextBtn.innerHTML = `<span>${isAr ? 'التحدي التالي' : 'Next Challenge'}</span> <i class="fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'}"></i>`;
    }
  }

  function nextQuestion() {
    sound.click();
    if (lives <= 0 || currentIndex >= activeQuestions.length - 1) {
      finishAssessment();
      return;
    }
    currentIndex++;
    renderCurrentCard();
  }

  // ==========================================
  // 11. POST-EXAM ANALYTICS REPORT CARD
  // ==========================================
  function finishAssessment() {
    clearInterval(speedrunTimer);
    isQuizActive = false;

    document.getElementById('quizScreen').classList.remove('flex');
    document.getElementById('quizScreen').classList.add('hidden');

    const resultScreen = document.getElementById('resultScreen');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('flex');

    const iconBox = document.getElementById('resultIconBox');
    const title = document.getElementById('resultTitle');
    const sub = document.getElementById('resultSubtitle');
    const isAr = currentLang === 'ar';

    const answeredTotal = currentIndex + 1;
    const accuracy = answeredTotal > 0 ? Math.round((correctCount / answeredTotal) * 100) : 0;
    const lvlObj = LEVEL_THRESHOLDS.slice().reverse().find(t => score >= t.minXp) || LEVEL_THRESHOLDS[0];

    if (lives <= 0) {
      sound.wrong();
      iconBox.className = 'w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl bg-rose-500/20 text-rose-400 border border-rose-500/30';
      iconBox.innerHTML = '<i class="fa-solid fa-heart-crack"></i>';
      title.innerText = isAr ? "استُنفدت المحاولات (تم الإقصاء)" : "Lives Depleted (Eliminated)";
      sub.innerText = isAr 
        ? "فقدت جميع المحاولات الثلاث. راجع مصطلحات الفصل الأول وأعد المحاولة مرة أخرى!" 
        : "You made 3 mistakes and lost all lives. Review Chapter 1 terminology and retry!";
    } else if (accuracy >= 80) {
      sound.victory();
      iconBox.className = 'w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-bounce';
      iconBox.innerHTML = '<i class="fa-solid fa-trophy"></i>';
      title.innerText = isAr ? "إتقان فائق معتمد! 🎉" : "Certified Mastery! 🎉";
      sub.innerText = isAr 
        ? "أداء متميز ودقة عالية جداً في مفاهيم وتطبيقات وأخلاقيات الفصل الأول!" 
        : "Outstanding analytical accuracy across Chapter 1 terminologies and technical foundations!";
      if (typeof confetti === 'function') {
        confetti({ particleCount: 140, spread: 85, origin: { y: 0.55 } });
      }
    } else {
      sound.correct();
      iconBox.className = 'w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30';
      iconBox.innerHTML = '<i class="fa-solid fa-award"></i>';
      title.innerText = isAr ? "اكتمل التقييم بنجاح" : "Assessment Complete";
      sub.innerText = isAr 
        ? "أحسنت! راجع المفاهيم التي أخطأت بها لتعزيز درجاتك في الجولات القادمة." 
        : "Good progress! Study the penalized questions to boost your final score.";
    }

    document.getElementById('resFinalScore').innerText = score;
    document.getElementById('resAccuracy').innerText = `${accuracy}%`;
    document.getElementById('resFinalRank').innerText = isAr ? lvlObj.nameAr : lvlObj.nameEn;
    document.getElementById('resMaxStreak').innerText = maxStreak;

    // Render Lesson Breakdown Bars
    renderLessonBreakdown();
  }

  function renderLessonBreakdown() {
    const container = document.getElementById('lessonBreakdownContainer');
    if (!container) return;
    container.innerHTML = '';
    const isAr = currentLang === 'ar';

    Object.keys(lessonStats).forEach(lessonKey => {
      const stat = lessonStats[lessonKey];
      if (stat.total === 0) return;
      const pct = Math.round((stat.correct / stat.total) * 100);

      const row = document.createElement('div');
      row.className = 'flex flex-col gap-1 text-left';
      if (isAr) row.className = 'flex flex-col gap-1 text-right';

      row.innerHTML = `
        <div class="flex justify-between text-xs font-bold text-slate-300">
          <span>${isAr ? stat.nameAr : lessonKey}</span>
          <span class="font-mono ${pct >= 75 ? 'text-emerald-400' : (pct >= 50 ? 'text-amber-400' : 'text-rose-400')}">${stat.correct}/${stat.total} (${pct}%)</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/60">
          <div class="h-2 rounded-full transition-all duration-500 ${pct >= 75 ? 'bg-emerald-500' : (pct >= 50 ? 'bg-amber-500' : 'bg-rose-500')}" style="width: ${pct}%"></div>
        </div>
      `;
      container.appendChild(row);
    });
  }

  // ==========================================
  // 12. BILINGUAL LANGUAGE SWITCHER
  // ==========================================
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bak_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'ar' 
        ? '<i class="fa-solid fa-globe"></i> English' 
        : '<i class="fa-solid fa-globe"></i> العربية';
    }

    updateStaticTranslations();
    updateHUD();

    if (isQuizActive && activeQuestions.length > 0) {
      renderCurrentCard();
    }
  }

  function toggleLanguage() {
    sound.click();
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  }

  function updateStaticTranslations() {
    const isAr = currentLang === 'ar';
    document.querySelectorAll('[data-i18n-en]').forEach(el => {
      const en = el.getAttribute('data-i18n-en');
      const ar = el.getAttribute('data-i18n-ar');
      if (en && ar) {
        el.innerText = isAr ? ar : en;
      }
    });
  }

  // ==========================================
  // 13. SOUND TOGGLE CONTROLLER
  // ==========================================
  function toggleSoundUI() {
    const isMuted = sound.toggleMute();
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.innerHTML = isMuted 
        ? '<i class="fa-solid fa-volume-xmark text-slate-400"></i>' 
        : '<i class="fa-solid fa-volume-high text-indigo-400"></i>';
    }
  }

  // ==========================================
  // 14. INITIALIZATION HOOK
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    initAntiCheat();

    // Bind Global buttons
    window.chooseMode = chooseMode;
    window.returnToMenu = returnToMenu;
    window.startAssessmentWithCurrentMode = startAssessment;
    window.nextQuestion = nextQuestion;
    window.toggleLanguage = toggleLanguage;
    window.toggleSoundUI = toggleSoundUI;

    // Set initial sound button state
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn && sound.isMuted) {
      soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark text-slate-400"></i>';
    }

    // Set initial language
    setLanguage(currentLang);
  });

})();
